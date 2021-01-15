import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19NewsComponent } from './covid19-news.component';

describe('Covid19NewsComponent', () => {
  let component: Covid19NewsComponent;
  let fixture: ComponentFixture<Covid19NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19NewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
