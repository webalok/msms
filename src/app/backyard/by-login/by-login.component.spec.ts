import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLoginComponent } from './by-login.component';

describe('ByLoginComponent', () => {
  let component: ByLoginComponent;
  let fixture: ComponentFixture<ByLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
