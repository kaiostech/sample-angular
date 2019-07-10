import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftkeyComponent } from './softkey.component';

describe('SoftkeyComponent', () => {
  let component: SoftkeyComponent;
  let fixture: ComponentFixture<SoftkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
