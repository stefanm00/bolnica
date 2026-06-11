import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Odeljenje } from '../../models/odeljenje';
import { OdeljenjeService } from '../../services/odeljenje.service';

@Component({
  selector: 'app-odeljenje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './odeljenje.html',
  styleUrl: './odeljenje.css'
})
export class OdeljenjeComponent implements OnInit {
  odeljenja: Odeljenje[] = [];

  constructor(private service: OdeljenjeService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.odeljenja = data; },
      error: (err) => console.log(err)
    });
  }
}