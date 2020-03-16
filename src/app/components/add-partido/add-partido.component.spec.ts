import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartidoComponent } from './add-partido.component';

describe('AddPartidoComponent', () => {
  let component: AddPartidoComponent;
  let fixture: ComponentFixture<AddPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
