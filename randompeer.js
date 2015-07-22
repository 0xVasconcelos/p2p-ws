/* TODO: Conectar a peers da lista de IP's adquirida do tracker */
/* TODO: Achar uma maneira de gerar um ID único para cada peer baseado no IP e anúncio */

var WebSocket = require('ws');
var peers = {};
var peersid = ['011', '312', '12C', 'XYZ', 'HHX', 'ALO', 'MAR', 'CIA', 'NO.'];

function peerConnect(i){
    return function(){
        peers[peersid[i]] = new WebSocket('ws://127.0.0.1:8080');
        peers[peersid[i]].on('open', function(){
            peers[peersid[i]].send(i);
        });
    }
}

for(var i in peersid){
    peers[peersid[i]] = peerConnect(i);
}

for(var j in peersid){
    peers[peersid[j]]();
}
