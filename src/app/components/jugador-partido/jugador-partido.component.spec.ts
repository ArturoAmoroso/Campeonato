import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorPartidoComponent } from './jugador-partido.component';

describe('JugadorPartidoComponent', () => {
  let component: JugadorPartidoComponent;
  let fixture: ComponentFixture<JugadorPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
