import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Dijagnoza } from '../../models/dijagnoza';
import { DijagnozaService } from '../../services/dijagnoza.service';

@Component({
  selector: 'app-dijagnoza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dijagnoza.html',
  styleUrl: './dijagnoza.css'
})
export class DijagnozaComponent implements OnInit {
  dijagnoze: Dijagnoza[] = [];

  constructor(private service: DijagnozaService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.dijagnoze = data; },
      error: (err) => console.log(err)
    });
  }
}