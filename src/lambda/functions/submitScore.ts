import {APIGatewayProxyHandler} from 'aws-lambda';
import { nanoid } from "nanoid";
import {DocumentClient} from 'aws-sdk/clients/dynamodb';

import { Scorecard } from '../../scorecard/scorecard';


const client = new DocumentClient({region: 'eu-north-1'});


export const handler: APIGatewayProxyHandler = async (event, context): Promise<any> => {


    return {test: "x"}
}
