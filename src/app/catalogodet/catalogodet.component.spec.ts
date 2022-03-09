import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogodetComponent } from './catalogodet.component';

describe('CatalogodetComponent', () => {
  let component: CatalogodetComponent;
  let fixture: ComponentFixture<CatalogodetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogodetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogodetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
