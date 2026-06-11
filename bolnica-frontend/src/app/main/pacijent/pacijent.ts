import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pacijent } from '../../models/pacijent';
import { PacijentService } from '../../services/pacijent.service';

@Component({
  selector: 'app-pacijent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacijent.html',
  styleUrl: './pacijent.css'
})
export class PacijentComponent implements OnInit {
  pacijenti: Pacijent[] = [];

  constructor(private service: PacijentService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.pacijenti = data; },
      error: (err) => console.log(err)
    });
  }
}