import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyContentComponent } from './fy-content.component';

describe('FyContentComponent', () => {
  let component: FyContentComponent;
  let fixture: ComponentFixture<FyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
