import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaSalaComponent } from './cria-sala.component';

describe('CriaSalaComponent', () => {
  let component: CriaSalaComponent;
  let fixture: ComponentFixture<CriaSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
