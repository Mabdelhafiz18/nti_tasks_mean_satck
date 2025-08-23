import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  student: Student | undefined;
  studentId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.route.params.subscribe(params => {
      this.studentId = +params['id'];
      this.student = this.studentService.getStudentById(this.studentId);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  
  }

