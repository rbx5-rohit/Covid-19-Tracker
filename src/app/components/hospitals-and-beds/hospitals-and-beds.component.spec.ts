import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsAndBedsComponent } from './hospitals-and-beds.component';

describe('HospitalsAndBedsComponent', () => {
  let component: HospitalsAndBedsComponent;
  let fixture: ComponentFixture<HospitalsAndBedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsAndBedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsAndBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
