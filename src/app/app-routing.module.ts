import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviaMensagemComponent } from './componente/envia-mensagem/envia-mensagem.component';
import { CriaSalaComponent } from './login/cria-sala/cria-sala.component';


const routes: Routes = [
  
  {
    path:"",
    component:CriaSalaComponent
  },
  {
    path:"criasala/:usuario/:id",
    component:EnviaMensagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
