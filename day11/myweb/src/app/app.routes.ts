import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
    },
    {
        path: 'posts/:id',
        loadChildren: () => import('./post-detail/post-detail.module').then(m => m.PostDetailModule)
    },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '**', redirectTo: 'posts' }
];
