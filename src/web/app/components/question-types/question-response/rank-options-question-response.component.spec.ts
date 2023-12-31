import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RankOptionsQuestionResponseComponent } from './rank-options-question-response.component';

describe('RankOptionsQuestionResponseComponent', () => {
  let component: RankOptionsQuestionResponseComponent;
  let fixture: ComponentFixture<RankOptionsQuestionResponseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RankOptionsQuestionResponseComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankOptionsQuestionResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
