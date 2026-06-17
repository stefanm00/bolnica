import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Dijagnoza } from '../../models/dijagnoza';
import { DijagnozaService } from '../../services/dijagnoza.service';

@Component({
  selector: 'app-dijagnoza-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './dijagnoza-dialog.html',
  styleUrl: './dijagnoza-dialog.css'
})
export class DijagnozaDialogComponent {
  public flag!: number;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DijagnozaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dijagnoza,
    public dijagnozaService: DijagnozaService
  ) {}

  public add(): void {
    this.dijagnozaService.addDijagnoza(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodata dijagnoza', 'U redu', { duration: 2500 });
    });
  }

  public update(): void {
    this.dijagnozaService.updateDijagnoza(this.data).subscribe(() => {
      this.snackBar.open('Uspešno izmenjena dijagnoza', 'U redu', { duration: 2500 });
    });
  }

  public delete(): void {
    this.dijagnozaService.deleteDijagnoza(this.data.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisana dijagnoza', 'U redu', { duration: 2500 });
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}