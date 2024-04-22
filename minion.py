#!/usr/bin/python

# Lab 1 - Setting up.
# Make sure your host and region are correct.

import sys
import ssl
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
import json
import time

from datetime import datetime

#Setup our MQTT client and security certificates
#Make sure your certificate names match what you downloaded from AWS IoT

mqttc = AWSIoTMQTTClient("1234")

#Use the endpoint from the settings page in the IoT console
mqttc.configureEndpoint("a19it84jrfmhk9-ats.iot.us-east-1.amazonaws.com",8883)
mqttc.configureCredentials("./rootCA.pem","./privateKey.pem","./certificate.pem")

#Function to encode a payload into JSON
def json_encode(string):
        return json.dumps(string)

mqttc.json_encode=json_encode



# datetime object containing current date and time
now = datetime.now()
 
# dd/mm/YY H:M:S
dt_string = now.strftime("%d/%m/%Y %H:%M:%S")


#Declaring our variables
message ={
  'timeStamp': dt_string,
  'deviceId': "Test 1",
  'latitude': -0.29278028315129256, 
  'longitude': 36.82997663286112,
  'temperature': 35,
  'relativeHumidity': 74,
  'pressure': 55
}

#Encoding into JSON
message = mqttc.json_encode(message)

#This sends our test message to the iot topic
def send():
    mqttc.publish("hackathon-24", message, 0)
    print("Message Published")


#Connect to the gateway
mqttc.connect()
print("Connected")

#Loop until terminated
while True:
    send()
    time.sleep(5)

mqttc.disconnect()

#To check and see if your message was published to the message broker go to the MQTT Client and subscribe to the iot topic and you should see your JSON Payload

