/* TODO: Aceitar e organizar clientes da mesma forma que no randompeer.js */

/* TODO: Aceitar conexões em mais de uma porta */

/* TODO: Unificar randompeer.js(atualmente trabalhando como cliente) e app.js(atualmente trabalhando como servidor) */


var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
});

ws.send('something');
});
