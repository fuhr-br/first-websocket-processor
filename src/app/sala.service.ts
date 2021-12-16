import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketConnector } from 'src/websocket/websocket-connector';
import { Sala } from './sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  items: any[] = [];
  private webSocketConnector: WebSocketConnector;
  connect(id:string){
    console.warn("Entrei na Connect")
    this.webSocketConnector = new WebSocketConnector(
      'https://poc-websocket.herokuapp.com/socket',
      '/statusProcessor'+ id,
      this.onMessage.bind(this)
    );
  }

  start(sala: Sala) {
    this.http.put<Sala>('https://poc-websocket.herokuapp.com//api', sala)
      .subscribe(response => console.log(response));
  }

  onMessage(message: any): void {
    this.items.push(message.body);
  }

  mostrarMensagem():any{
    return this.items;
  }

  disconnect(){
    this.webSocketConnector.disconnect();
    this.items = [];
    this.router.navigate([""]);
  }

  constructor(private http:HttpClient, private router:Router) { }
}
