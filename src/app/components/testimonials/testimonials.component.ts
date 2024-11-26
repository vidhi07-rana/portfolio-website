import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  testimonials = [
    {
      name: 'Jane Doe',
      image: 'https://img.freepik.com/premium-photo/businessman-holding-hand-icon-user-manwoman-3d-style-internet-icons-interface-foreground-global-network-media-concept_150455-18708.jpg?ga=GA1.1.1251179688.1686898531&semt=ais_hybrid',
      text: 'Great work! Highly recommended.',
      rating: 5
    },
    {
      name: 'John Smith',
      image: 'https://img.freepik.com/premium-photo/human-resources-hr-management-concept-hand-hold-digital-hologram-human-grey-background-business-organization-staff-hierarchy_486333-144.jpg?ga=GA1.1.1251179688.1686898531&semt=ais_hybrid',
      text: 'Very professional and timely delivery.',
      rating: 4
    },
    {
      name: 'Alex Johnson',
      image: 'https://img.freepik.com/premium-vector/flat-profile-icon-transparent-png-vector-layer-illustration_1226483-3160.jpg?ga=GA1.1.1251179688.1686898531&semt=ais_hybrid',
      text: 'Amazing skills, love the outcome.',
      rating: 5
    }
  ];
}
