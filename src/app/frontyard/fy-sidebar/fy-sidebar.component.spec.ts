import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FySidebarComponent } from './fy-sidebar.component';

describe('FySidebarComponent', () => {
  let component: FySidebarComponent;
  let fixture: ComponentFixture<FySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
