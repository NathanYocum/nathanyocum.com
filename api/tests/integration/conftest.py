import boto3

ddb = boto3.resource('dynamodb', endpoint_url="http://localhost:8000")

table = ddb.create_table(
    TableName='TheTable',
    KeySchema=[
        {
            'AttributeName': 'pk',
            'KeyType': 'HASH'  #Partition key
        },
        {
            'AttributeName': 'sk',
            'KeyType': 'RANGE'  #Sort key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'pk',
            'AttributeType': 'S'
        },
        {
            'AttributeName': 'sk',
            'AttributeType': 'S'
        },

    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 1,
        'WriteCapacityUnits': 1
    }
)