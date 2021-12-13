import { Component } from '@angular/core';
import { WebSocketConnector } from 'src/websocket/websocket-connector';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: any[] = [];
  private webSocketConnector: WebSocketConnector;

  mensagem: Sala={
    id:'1',
    numPlayers: '2'
  };
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  searchForm = this.formBuilder.group({
    id:'1',
    numPlayers: '2',
  });

  changeMessage(): void{
    this.mensagem.id = this.searchForm.value.id;
    this.mensagem.numPlayers = this.searchForm.value.numPlayers;
  }
  ngOnInit(): void {
    this.webSocketConnector = new WebSocketConnector(
      'https://poc-websocket.herokuapp.com/socket',
      '/statusProcessor'+this.mensagem.id,
      this.onMessage.bind(this)
    );
  }

  start() {
    this.http.put<Sala>('https://poc-websocket.herokuapp.com//api', this.mensagem)
      .subscribe(response => console.log(response));
  }

  onMessage(message: any): void {
    this.items.push(message.body);
  }


}

export interface Sala{
  id: string,
  numPlayers: string
}