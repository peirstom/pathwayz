import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderSummaryComponent } from './tender-summary.component';

describe('TenderSummaryComponent', () => {
  let component: TenderSummaryComponent;
  let fixture: ComponentFixture<TenderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
