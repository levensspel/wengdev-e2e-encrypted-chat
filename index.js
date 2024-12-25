const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

console.log('Waiting for WebSocket connection on ws://localhost:3000');
server.on('connection', (ws) => {
    ws.on('message', (message) => {
        server.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });
});