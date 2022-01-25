import {APIGatewayProxyHandler} from 'aws-lambda';
import { nanoid } from "nanoid";
import {DocumentClient} from 'aws-sdk/clients/dynamodb';

import { Scorecard } from '../../scorecard/scorecard';
import { Game, Identifier, Player, PlayerCount } from '../dataTypes';
import { createGameItem, createPlayer } from '../utils';

const client = new DocumentClient({region: 'eu-north-1'});


interface CreateGameRequest {
    playerCount: PlayerCount,
}

interface CreateGameResponse {
    success: boolean,
    gameID?: Identifier | undefined,
}


export const handler: APIGatewayProxyHandler = async (event, context): Promise<any> => {

    let body: CreateGameRequest = JSON.parse(event.body);

    let gameID: Identifier = nanoid();

    let gameItem: Game = createGameItem(body.playerCount, gameID);


    let dynoRes = await client.put({
        TableName: process.env.TABLE_NAME,
        Item: gameItem,
    }).promise()

    let response: CreateGameResponse;


    if (dynoRes.$response.error) {
        console.error(dynoRes.$response.error.message);
        response = { success: false };

    } else {
        response = { success: true, gameID }
    }

    return response;

}
