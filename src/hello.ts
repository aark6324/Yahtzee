import {APIGatewayProxyHandler} from 'aws-lambda';
import {DocumentClient} from 'aws-sdk/clients/dynamodb';

const client = new DocumentClient({region: 'eu-north-1'});

export const handler: APIGatewayProxyHandler = async (event, context): Promise<any> => {
    const result = await client.get({
        TableName: 'Yahtzee',
        Key: {
            entitiyID: 'random',
            nodeID: 'test'
        }
    }).promise();

    const result2 = await client.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            entitiyID: 'random',
            nodeID: 'test2',
            data: 'some data...'
        }
    }).promise();

    return result.Item;
}
