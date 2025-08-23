import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STUDENT_ROUTES } from './students.routes';

@NgModule({
    imports: [RouterModule.forChild(STUDENT_ROUTES)],
    exports: [RouterModule]
})
export class StudentsRoutingModule { }

// This empty module is to help with lazy loading
export default StudentsRoutingModule;
