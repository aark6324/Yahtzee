import {APIGatewayProxyHandler} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event, context): Promise<any> => {
    console.log(event);
    return 'Hello World!';
}
