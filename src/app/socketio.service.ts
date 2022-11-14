///<reference path="Constants.ts"/>


import {Injectable} from '@angular/core';
import {hostname, port} from "./Constants";
import {Obstacle} from "./models/Obstacle";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {io} from "socket.io-client";





@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  message: ReplaySubject<Obstacle> = new ReplaySubject<Obstacle>();
  socket = new WebSocket(hostname + ":" + port);

  constructor() {
    console.log("connecting")
    this.socket.addEventListener("open", () => {
      console.log("Connected");
    });
    this.socket.addEventListener("message", (msg) =>{
      console.log("Received:", msg.data);
    })
  }
  //
  //
  //
  // sendMessage(message: string) {
  //   this.socket.send(message);
  // }
  //
  // sendCommand(command: string) {
  //   this.socket.send(command);
  // }
  //
  // getMessage = () => {
  //   // this.socket.on('message', (message) => {
  //
  //   // })
  // }
  //
  // getObstacle = () => {
  //   this.socket.addEventListener("message", ({ data }) => {
  //     console.log(data);
  //     let arr = data.split(",");
  //     if (arr.len < 3) {
  //       console.log("Bad data: " + data);
  //     }
  //     let x = arr[0];
  //     let y = arr[1];
  //     let width = arr[2];
  //     let obstacle = new Obstacle(x, y, width);
  //
  //     this.message.next(obstacle);
  //     return this.message.asObservable();
  //   })
  // }

}
