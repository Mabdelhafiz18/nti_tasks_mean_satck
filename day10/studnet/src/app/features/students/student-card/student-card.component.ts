import { Component, Input } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student!: Student;
}
