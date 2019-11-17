import { Component } from '@angular/core';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private validationService: ValidationService) {}

  onSubmit(content) {
    this.validationService.validateForm(content);
  }
}
