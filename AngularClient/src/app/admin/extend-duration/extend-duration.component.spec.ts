import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendDurationComponent } from './extend-duration.component';

describe('ExtendDurationComponent', () => {
  let component: ExtendDurationComponent;
  let fixture: ComponentFixture<ExtendDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
