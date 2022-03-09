import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriadetComponent } from './categoriadet.component';

describe('CategoriadetComponent', () => {
  let component: CategoriadetComponent;
  let fixture: ComponentFixture<CategoriadetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriadetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
