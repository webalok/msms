import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyFooterComponent } from './fy-footer.component';

describe('FyFooterComponent', () => {
  let component: FyFooterComponent;
  let fixture: ComponentFixture<FyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
