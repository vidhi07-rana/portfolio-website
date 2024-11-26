import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-skill.component.html',
  styleUrl: './simple-skill.component.css'
})
export class SimpleSkillComponent {

  skills = [
    { name: 'Angular', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'HTML', level: 80 }
  ];
}
