import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

/**
 * Contact page.
 */
@Component({
  selector: 'tm-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {

  readonly supportEmail: string = environment.supportEmail;

}
