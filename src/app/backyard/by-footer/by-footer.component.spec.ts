import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByFooterComponent } from './by-footer.component';

describe('ByFooterComponent', () => {
  let component: ByFooterComponent;
  let fixture: ComponentFixture<ByFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
