import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { TimelineSlideComponent } from "../../timeline-slide/timeline-slide.component";
import { CommonModule } from '@angular/common';
import { SimpleSkillComponent } from "../simple-skill/simple-skill.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TimelineSlideComponent, CommonModule, SimpleSkillComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {


  
}
              