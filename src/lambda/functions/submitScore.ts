import {APIGatewayProxyHandler} from 'aws-lambda';
import {DocumentClient} from 'aws-sdk/clients/dynamodb';
import type { AllDiceResults } from "../../types";

import { Scorecard, Scores } from '../../scorecard/scorecard';
import type { Identifier } from '../dataTypes';
import { CategoryKey } from '../../scorecard/categories';


const client = new DocumentClient({region: 'eu-north-1'});

interface SubmitScoreRequest {
    gameID: Identifier;
    playerID: string;
    rolledDices: AllDiceResults;
    category: CategoryKey;
}


interface SubmitScoreResponse {
    success: boolean;
    scores?: Scores;
}


async function getPlayerScores(gameID: Identifier, playerID: Identifier): Promise<Scores | undefined> {

    let dynoRes = await client.get({
        TableName: process.env.TABLE_NAME,
        Key: {
            entitiyID: `game#${gameID}`,
            nodeID: `player#${playerID}`
        }
    }).promise();

    return dynoRes.Item.scores as Scores;
}


async function putPlayerScores(gameID: Identifier, playerID: Identifier, scores: Scores) {

    await client.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            entitiyID: `game#${gameID}`,
            nodeID: `player#${playerID}`,
            scores: scores,
        },
    }).promise();

}



export const handler: APIGatewayProxyHandler = async (event, context): Promise<any> => {
    let response: SubmitScoreResponse;


    const body: SubmitScoreRequest = JSON.parse(event.body);

    const scores = await getPlayerScores(body.gameID, body.playerID);

    let scorecard = new Scorecard(scores);
    try {

        scorecard.claimGrantedPoints(body.category, body.rolledDices);

        await putPlayerScores(body.gameID, body.playerID, scorecard.scores);

        response = { success: true, scores: scorecard.scores };

    } catch(err) {

        response = { success: false };

    }

    return response;
}
