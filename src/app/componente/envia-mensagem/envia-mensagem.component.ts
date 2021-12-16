import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/sala';
import { SalaService } from 'src/app/sala.service';
import { WebSocketConnector } from 'src/websocket/websocket-connector';

@Component({
  selector: 'app-envia-menssagem',
  templateUrl: './envia-mensagem.component.html',
  styleUrls: ['./envia-mensagem.component.css']
})
export class EnviaMensagemComponent implements OnInit {
  items:any[];
  private sala: Sala;
    
  constructor(private http: HttpClient, private formBuilder: FormBuilder,
     private route: ActivatedRoute, private salaService:SalaService) {
    this.sala={
      id:'0',
      usuario: '',
      mensagem:''
    };
  
  }

  searchForm = this.formBuilder.group({
    mensagem:""
  });

  changeMessage(): void{
    this.sala.mensagem= this.searchForm.value.mensagem;
    

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.sala.usuario = String(routeParams.get('usuario'));
    this.sala.id = String(routeParams.get('id'));
    this.items = this.salaService.mostrarMensagem();
  }

  start() {
    this.changeMessage();
    this.salaService.start(this.sala);
  }

}


