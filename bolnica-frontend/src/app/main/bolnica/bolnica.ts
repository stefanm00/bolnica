import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Bolnica } from '../../models/bolnica';
import { BolnicaService } from '../../services/bolnica.service';

@Component({
  selector: 'app-bolnica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bolnica.html',
  styleUrl: './bolnica.css'
})
export class BolnicaComponent implements OnInit {
  bolnice: Bolnica[] = [];

  constructor(private service: BolnicaService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.bolnice = data; },
      error: (err) => console.log(err)
    });
  }
}