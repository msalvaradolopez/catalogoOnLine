import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogobycatComponent } from './catalogobycat.component';

describe('CatalogobycatComponent', () => {
  let component: CatalogobycatComponent;
  let fixture: ComponentFixture<CatalogobycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogobycatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogobycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
