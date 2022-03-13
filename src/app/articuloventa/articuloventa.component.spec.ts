import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloventaComponent } from './articuloventa.component';

describe('ArticuloventaComponent', () => {
  let component: ArticuloventaComponent;
  let fixture: ComponentFixture<ArticuloventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
