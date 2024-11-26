import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects = [
    { 
      name: 'Project 1', 
      image: 'https://img.freepik.com/premium-vector/robotic-operator-with-man-consultant-using-laptop-chat-bubble-client-support-robot-vs-human-standing-together-call-center-office-interior-artificial-intelligence-concept-full-length-horizontal_48369-23110.jpg?ga=GA1.1.1251179688.1686898531&semt=ais_hybrid', 
      description: 'An AI-powered customer support chatbot designed to automate user queries and provide real-time assistance for e-commerce platforms.' 
    },
    { 
      name: 'Project 2', 
      image: 'https://img.freepik.com/premium-vector/robotic-operator-with-man-consultant-using-laptop-chat-bubble-client-support-robot-vs-human-standing-together-call-center-office-interior-artificial-intelligence-concept-full-length-horizontal_48369-23110.jpg?ga=GA1.1.1251179688.1686898531&semt=ais_hybrid', 
      description: 'A collaborative task management tool with real-time updates and AI-driven insights to improve team productivity and project tracking.' 
    },
    { 
      name: 'Project 3', 
      image: 'https://img.freepik.com/premium-vector/robotic-operator-with-man-consultant-using-laptop-chat-bubble-client-support-robot-vs-human-standing-together-call-center-office-interior-artificial-intelligence-concept-full-length-horizontal_48369-23110.jpg?ga=GA1.1.1251179688.1686898531&semt=ais_hybrid', 
      description: 'A data visualization dashboard utilizing AI to analyze and present business intelligence metrics, enhancing decision-making for enterprises.' 
    },

    
  ]
  
}
