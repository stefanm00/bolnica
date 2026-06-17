import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './author.html',
  styleUrl: './author.css'
})
export class AuthorComponent {}