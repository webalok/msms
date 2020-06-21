import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByHeaderComponent } from './by-header.component';

describe('ByHeaderComponent', () => {
  let component: ByHeaderComponent;
  let fixture: ComponentFixture<ByHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
