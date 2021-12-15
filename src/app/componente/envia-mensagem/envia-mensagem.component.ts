import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WebSocketConnector } from 'src/websocket/websocket-connector';

@Component({
  selector: 'app-envia-menssagem',
  templateUrl: './envia-mensagem.component.html',
  styleUrls: ['./envia-mensagem.component.css']
})
export class EnviaMensagemComponent implements OnInit {

  items: any[] = [];
  private webSocketConnector: WebSocketConnector;

  mensagem: Sala={
    id:'4',
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

  }

  connect(){
    console.warn("Entrei na Connect")
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


