import { Part } from "./Part";
import WebSocket from 'ws'

let part = new Part('Part A')

let wss = new WebSocket.Server({ port: 3001 })

wss.on('connection', function connection(ws) {  
    //when new client connects

    ws.on('message', function incoming(message) {
      part.reset()
    });

});

setInterval(() =>{

  part.reload()
  
  let message = JSON.stringify(part)

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })

}, 1500)