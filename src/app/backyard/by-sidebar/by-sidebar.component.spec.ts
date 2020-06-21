import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BySidebarComponent } from './by-sidebar.component';

describe('BySidebarComponent', () => {
  let component: BySidebarComponent;
  let fixture: ComponentFixture<BySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
