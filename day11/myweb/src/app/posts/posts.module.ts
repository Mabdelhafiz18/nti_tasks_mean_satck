import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PostsRoutingModule,
    PostsListComponent
  ]
})
export class PostsModule { }
