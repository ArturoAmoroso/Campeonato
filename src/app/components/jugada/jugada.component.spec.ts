import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadaComponent } from './jugada.component';

describe('JugadaComponent', () => {
  let component: JugadaComponent;
  let fixture: ComponentFixture<JugadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
