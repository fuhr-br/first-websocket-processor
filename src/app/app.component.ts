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

  mensagem: Mensagem;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  searchForm = this.formBuilder.group({
    remetente:'',
    mensagem: '',
  });

  changeMessage(): void{
    this.mensagem.remetente = this.searchForm.value.remetente;
    this.mensagem.mensagem = this.searchForm.value.mensagem;
  }
  ngOnInit(): void {

    this.mensagem = {remetente:"Gabriel",mensagem:"Teste"};

    this.webSocketConnector = new WebSocketConnector(
      'http://localhost:8080/socket',
      '/statusProcessor',
      this.onMessage.bind(this)
    );
  }

  start() {
    this.http.put<Mensagem>('http://localhost:8080/api', this.mensagem)
      .subscribe(response => console.log(response));
  }

  onMessage(message: any): void {
    this.items.push(message.body);
  }


}

export interface Mensagem{
  remetente: string,
  mensagem: string
}