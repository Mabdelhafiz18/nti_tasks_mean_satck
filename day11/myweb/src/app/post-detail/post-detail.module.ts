import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PostDetailRoutingModule,
    PostDetailComponent
  ]
})
export class PostDetailModule { }
