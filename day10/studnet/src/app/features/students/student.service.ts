import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private students: Student[] = [
        { id: 1, name: 'Mohamed abdlehafiz', age: 21, major: 'CS', gpa: 3.8 },
        { id: 2, name: 'ahamed abdelhafiz', age: 22, major: 'engineering', gpa: 3.9 },
        { id: 3, name: 'walter white', age: 20, major: 'business', gpa: 3.5 },
        { id: 4, name: 'jon snow', age: 23, major: 'CS', gpa: 4.0 },
        { id: 5, name: 'mo salah', age: 21, major: 'CS', gpa: 3.7 }
    ];

    constructor() { }

    getAllStudents(): Student[] {
        return this.students;
    }

    getStudentById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }
}
