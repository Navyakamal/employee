const WebSocket = require('ws');

let wss;

const initWebSocket = (server) => {
    wss = new WebSocket.Server({ server });

    wss.broadcast = (data) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(data));
            }
        });
    };

    wss.on('connection', (ws) => {
        console.log('New client connected');
        ws.on('close', () => console.log('Client disconnected'));
    });
};

// Safely broadcasting when WebSocket is initialized
const broadcast = (data) => {
    if (wss) {
        wss.broadcast(data);
    } else {
        console.log('WebSocket server not initialized yet');
    }
};

module.exports = { initWebSocket, broadcast };
