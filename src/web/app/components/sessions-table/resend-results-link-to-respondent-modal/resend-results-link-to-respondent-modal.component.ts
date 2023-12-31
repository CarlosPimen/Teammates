import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  InstructorListInfoTableRowModel,
  StudentListInfoTableRowModel,
} from '../respondent-list-info-table/respondent-list-info-table-model';

/**
 * Re-send results link to students modal.
 */
@Component({
  selector: 'tm-resend-results-link-to-respondent-modal',
  templateUrl: './resend-results-link-to-respondent-modal.component.html',
  styleUrls: ['./resend-results-link-to-respondent-modal.component.scss'],
})
export class ResendResultsLinkToRespondentModalComponent {

  // values below will be injected by other component
  courseId: string = '';
  feedbackSessionName: string = '';
  studentListInfoTableRowModels: StudentListInfoTableRowModel[] = [];
  instructorListInfoTableRowModels: InstructorListInfoTableRowModel[] = [];

  constructor(public activeModal: NgbActiveModal) {
  }

  /**
   * Collates a list of selected respondents with selected status.
   */
  collateRespondentsToSendHandler(): (StudentListInfoTableRowModel | InstructorListInfoTableRowModel)[] {
    const studentsToSend: (StudentListInfoTableRowModel | InstructorListInfoTableRowModel)[] =
        this.studentListInfoTableRowModels.map(
            (model: StudentListInfoTableRowModel) => ({ ...model }))
            .filter((model: StudentListInfoTableRowModel) => model.isSelected);
    const instructorsToSend: (StudentListInfoTableRowModel | InstructorListInfoTableRowModel)[] =
        this.instructorListInfoTableRowModels.map(
            (model: InstructorListInfoTableRowModel) => ({ ...model }))
            .filter((model: InstructorListInfoTableRowModel) => model.isSelected);
    return studentsToSend.concat(instructorsToSend);
  }
}
