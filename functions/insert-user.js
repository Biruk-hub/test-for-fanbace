'use strict'

const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient
const dynamodb = new DocumentClient()

const tableName = process.env.user_table

module.exports.handler = async (event) => {
  let requestJSON = JSON.parse(event.body)

  const response = dynamodb
    .put({
      TableName: tableName,
      Item: {
        Email: 'Sampel2222',
      },
    })
    .promise()

  return {
    statusCode: 200,
    body: response,
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
