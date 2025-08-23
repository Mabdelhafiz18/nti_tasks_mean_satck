import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { StudentCardComponent } from '../student-card/student-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [CommonModule, StudentCardComponent, RouterLink],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents();
  }

}
