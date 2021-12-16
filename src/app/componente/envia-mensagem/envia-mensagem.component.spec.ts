import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaMensagemComponent } from './envia-mensagem.component';

describe('EnviaMenssagemComponent', () => {
  let component: EnviaMensagemComponent;
  let fixture: ComponentFixture<EnviaMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviaMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviaMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
