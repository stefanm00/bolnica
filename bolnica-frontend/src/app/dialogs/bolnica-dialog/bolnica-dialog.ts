import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Bolnica } from '../../models/bolnica';
import { BolnicaService } from '../../services/bolnica.service';

@Component({
  selector: 'app-bolnica-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './bolnica-dialog.html',
  styleUrl: './bolnica-dialog.css'
})
export class BolnicaDialogComponent {
  public flag!: number;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BolnicaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bolnica,
    public bolnicaService: BolnicaService
  ) {}

  public add(): void {
    this.bolnicaService.addBolnica(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodata bolnica', 'U redu', { duration: 2500 });
    });
  }

  public update(): void {
    this.bolnicaService.updateBolnica(this.data).subscribe(() => {
      this.snackBar.open('Uspešno izmenjena bolnica', 'U redu', { duration: 2500 });
    });
  }

  public delete(): void {
    this.bolnicaService.deleteBolnica(this.data.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisana bolnica', 'U redu', { duration: 2500 });
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}