
import pkg from 'blip-sdk';
const { ClientBuilder } = pkg;
import WebSocketTransport from 'lime-transport-websocket';

// Put your identifier and access key here
let IDENTIFIER = 'takebot4';
let ACCESS_KEY = 'UmhEODlNMGdMdG1kejM3OHNvQzE=';

// Create a client instance passing the identifier and accessKey of your chatbot
let client = new ClientBuilder()
    .withIdentifier(IDENTIFIER)
    .withAccessKey(ACCESS_KEY)
    .withTransportFactory(() => new WebSocketTransport())
    .build();

// Connect with server asynchronously
// Connection will occurr via websocket on 8081 port.
client.connect()
    .then(function(session) {
        // After connection is possible send messages
        console.log(session);
        var msg = {
            type: "text/plain",
            content: "Hello, world",
            
        };
        client.sendMessage(msg);
    })


    client.addMessageReceiver(true, function(message) {
        console.log(message);
      });
       

    

    