import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorialistadoComponent } from './categorialistado.component';

describe('CategorialistadoComponent', () => {
  let component: CategorialistadoComponent;
  let fixture: ComponentFixture<CategorialistadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorialistadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorialistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
