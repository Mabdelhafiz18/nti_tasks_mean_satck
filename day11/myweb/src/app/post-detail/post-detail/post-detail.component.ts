import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  providers: [PostsService]
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPostDetails();
  }

  getPostDetails(): void {
    this.route.params.subscribe(params => {
      const postId = +params['id'];

      if (postId) {
        this.postsService.getPost(postId).subscribe({
          next: (data) => {
            this.post = data;
            console.log(data);
          },
          error: (err) => {
            this.error = 'Failed to load post details. Please try again later.';
            console.error('Error fetching post details:', err);
          }
        });
      } else {
        this.error = 'Invalid post ID';
      }
    });
  }

  backToPosts(): void {
    this.router.navigate(['/posts']);
  }
}
