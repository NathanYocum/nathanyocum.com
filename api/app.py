import boto3
from boto3.dynamodb.conditions import Key

DYNAMODB_CLIENT = boto3.client("dynamodb", endpoint_url="http://localhost:8000")

TABLE_NAME='TheTable'

DYNAMODB_CLIENT.put_item(TableName=TABLE_NAME, 
    Item={
        "pk":  {"S": "CHANNEL#bon_appetit"},
        "sk": {"S": "video#abcd1234"},
        "title": {"S": "Making Gourmet Chex Mix"},
        "type": {"S": "Video"}
    }
)
DYNAMODB_CLIENT.put_item(TableName=TABLE_NAME, 
    Item={
        "pk":  {"S": "CHANNEL#bon_appetit"},
        "sk": {"S": "video#12345678"},
        "title": {"S": "It's Alive!: Fermented Tomato Paste"},
        "type": {"S": "Video"}
    }
)
DYNAMODB_CLIENT.put_item(TableName=TABLE_NAME, 
    Item={
        "pk":  {"S": "CHANNEL#bon_appetit"},
        "sk": {"S": "video#zyxw9876"},
        "title": {"S": "It's Alive!: Fermented Tomato Paste"},
        "type": {"S": "Video"}
    }
)
DYNAMODB_CLIENT.put_item(TableName=TABLE_NAME, 
    Item={
        "pk":  {"S": "CHANNEL#binging_with_babish"},
        "sk": {"S": "video#abcdef1"},
        "title": {"S": "Basics With Babish: Crepes"},
        "type": {"S": "Video"}
    }
)

query = DYNAMODB_CLIENT.query(TableName=TABLE_NAME,
    KeyConditionExpression='#ch = :ch',
    ExpressionAttributeNames={"#ch": "pk"},
    ExpressionAttributeValues={":ch": { "S": "CHANNEL#binging_with_babish"}})
print(query)