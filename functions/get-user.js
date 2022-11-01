'use strict'

const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient
const dynamodb = new DocumentClient()

const tableName = process.env.user_table

module.exports.handler = async (event) => {
  const reqUser = {
    TableName: tableName,
  }

  const resp = await dynamodb.scan(reqUser).promise()
  return {
    statusCode: 200,
    body: resp.Items,
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
