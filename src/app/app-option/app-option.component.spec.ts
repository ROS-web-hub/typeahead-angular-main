import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOptionComponent } from './app-option.component';

describe('AppOptionComponent', () => {
  let component: AppOptionComponent;
  let fixture: ComponentFixture<AppOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
