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

  
  constructor() {
  }

}