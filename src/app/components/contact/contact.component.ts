import { Component } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})   
export class ContactComponent {
  contactForm!:any

  onSubmit(contactForm: any) {
    console.log('Form Submitted:', contactForm.value);
    contactForm.reset();
  }
}
