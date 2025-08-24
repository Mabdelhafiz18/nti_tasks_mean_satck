import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
  providers: [PostsService]
})
export class PostsListComponent implements OnInit {
  posts: any;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data || [];
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
      }
    });
  }

  viewPostDetails(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }

  deletePost(id: number) {
    console.log(id);
    this.postsService.deletePost(id).subscribe({
      next: (res) => {
        console.log(res);
        this.getPosts();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("complete");
      }
    });
  }
}
