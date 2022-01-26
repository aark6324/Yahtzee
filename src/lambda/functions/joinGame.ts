import { APIGatewayProxyHandler } from 'aws-lambda';
import { nanoid } from 'nanoid';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { Scorecard } from '../../scorecard/scorecard';
import { Game, GameStatus, Identifier, Player, PlayerCount, PlayerSession } from '../dataTypes';
import { createPlayer, createPlayerSession } from '../utils';

const client = new DocumentClient({ region: 'eu-north-1' });

interface JoinGameRequest {
    gameID: Identifier;
    playerID: string;
}

interface JoinGameResponse {
    success: boolean;
    gameStatus?: GameStatus;
    maxPlayers?: PlayerCount;
    currentPlayers?: PlayerCount;
}

async function getGame(gameID: Identifier): Promise<Game | undefined> {
    let dynoRes = await client
        .get({
            TableName: process.env.TABLE_NAME,
            Key: {
                entitiyID: `game#${gameID}`,
                nodeID: 'game',
            },
        })
        .promise();
    console.log("getGame:", dynoRes);

    return dynoRes.Item as Game;
}

async function putPlayerSession(playerSession: PlayerSession) {
    await client
        .put({
            TableName: process.env.TABLE_NAME,
            Item: playerSession,
        })
        .promise();
}

async function updateGame(game: Game): Promise<Game> {

    let dynoRes = await client.update({
        TableName: process.env.TABLE_NAME,
        Key: {
            entitiyID: game.entitiyID,
            nodeID: game.nodeID,
        },
        UpdateExpression: "SET #current_players = #current_players + :incr",
        ExpressionAttributeValues: {
            ":incr": 1
        },
        ExpressionAttributeNames: {
            "#current_players": "current_players"
        },
        ReturnValues: "ALL_NEW"
    }).promise();

    const updated_game = dynoRes.Attributes as Game;

    if (updated_game.current_players === game.max_players) {
        let dynoRes = await client.update({
            TableName: process.env.TABLE_NAME,
            Key: {
                entitiyID: game.entitiyID,
                nodeID: game.nodeID,
            },
            UpdateExpression: "SET #status = :new_status",
            ExpressionAttributeValues: {
                ":new_status": "playing"
            },
            ExpressionAttributeNames: {
                "#status": "status"
            }
        }).promise();

        return dynoRes.Attributes as Game;
    }

    return updated_game;
}


export const handler: APIGatewayProxyHandler = async (event, context): Promise<any> => {
    let response: JoinGameResponse;

    let body: JoinGameRequest = JSON.parse(event.body);

    let playerSession: PlayerSession = createPlayerSession(body.gameID, body.playerID);

    const game = await getGame(body.gameID);

    if (game && game.current_players < game.max_players) {
        await putPlayerSession(playerSession);
        response = {
            success: true,
            gameStatus: game.status,
            currentPlayers: game.current_players,
            maxPlayers: game.max_players,
        };



    } else {
        console.log("game:", game)
        response = { success: false };
    }

    return response;
};
