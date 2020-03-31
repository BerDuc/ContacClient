import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheProComponent } from './recherche-pro.component';

describe('RechercheProComponent', () => {
  let component: RechercheProComponent;
  let fixture: ComponentFixture<RechercheProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
