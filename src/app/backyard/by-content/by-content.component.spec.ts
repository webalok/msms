import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByContentComponent } from './by-content.component';

describe('ByContentComponent', () => {
  let component: ByContentComponent;
  let fixture: ComponentFixture<ByContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
