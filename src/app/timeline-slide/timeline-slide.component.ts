import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-slide.component.html',
  styleUrl: './timeline-slide.component.css'
})
export class TimelineSlideComponent {
  timelineEvents=[
    { year: '2024', description: 'Launched my portfolio website.' },
    { year: '2023', description: 'Worked on several client projects.' },
    { year: '2022', description: 'Graduated with a degree in Computer Science.' },
    { year: '2021', description: 'Started my first job as a developer.' },
    { year: '2020', description: 'Built my first web application.' },
  ]
}
