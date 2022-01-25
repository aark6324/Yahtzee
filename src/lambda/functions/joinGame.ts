import {APIGatewayProxyHandler} from 'aws-lambda';
import { nanoid } from "nanoid";
import {DocumentClient} from 'aws-sdk/clients/dynamodb';

import { Scorecard } from '../../scorecard/scorecard';
import { Game, GameStatus, Identifier, Player, PlayerCount, PlayerSession } from '../dataTypes';
import { createPlayer, createPlayerSession } from '../utils';

const client = new DocumentClient({region: 'eu-north-1'});


interface JoinGameRequest {
    gameID: Identifier
    playerID: string
}

interface JoinGameResponse {
    success: boolean
    gameStatus: GameStatus
    maxPlayers: PlayerCount
    currentPlayers: PlayerCount
}


export const handler: APIGatewayProxyHandler = async (event, context): Promise<any> => {

    let body: JoinGameRequest = JSON.parse(event.body);

    let playerSession: PlayerSession = createPlayerSession(body.gameID, body.playerID);

    
    // TODO: Add condition expression and create JoinGameResponse
    // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html
    let dynoRes = await client.put({
        TableName: process.env.TABLE_NAME,
        Item: playerSession,
        ConditionExpression: ""
    }).promise()

    let response: JoinGameResponse;
    return response;

}
