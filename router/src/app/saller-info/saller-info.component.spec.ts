import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerInfoComponent } from './saller-info.component';

describe('SallerInfoComponent', () => {
  let component: SallerInfoComponent;
  let fixture: ComponentFixture<SallerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
