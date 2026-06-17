import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Odeljenje } from '../../models/odeljenje';
import { OdeljenjeService } from '../../services/odeljenje.service';
import { Bolnica } from '../../models/bolnica';
import { BolnicaService } from '../../services/bolnica.service';

@Component({
  selector: 'app-odeljenje-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatSelectModule],
  templateUrl: './odeljenje-dialog.html',
  styleUrl: './odeljenje-dialog.css'
})
export class OdeljenjeDialogComponent implements OnInit {
  public flag!: number;
  public bolnice!: Bolnica[];

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<OdeljenjeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Odeljenje,
    public odeljenjeService: OdeljenjeService,
    public bolnicaService: BolnicaService
  ) {}

  ngOnInit(): void {
    this.bolnicaService.getAllBolnica().subscribe(bolnice => this.bolnice = bolnice);
  }

  compareTo(a: any, b: any) {
    return a && b ? a.id === b.id : a === b;
  }

  public add(): void {
    this.odeljenjeService.addOdeljenje(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodato odeljenje', 'U redu', { duration: 2500 });
    });
  }

  public update(): void {
    this.odeljenjeService.updateOdeljenje(this.data).subscribe(() => {
      this.snackBar.open('Uspešno izmenjeno odeljenje', 'U redu', { duration: 2500 });
    });
  }

  public delete(): void {
    this.odeljenjeService.deleteOdeljenje(this.data.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisano odeljenje', 'U redu', { duration: 2500 });
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}