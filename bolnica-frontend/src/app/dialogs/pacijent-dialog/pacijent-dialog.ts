import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Pacijent } from '../../models/pacijent';
import { PacijentService } from '../../services/pacijent.service';
import { Odeljenje } from '../../models/odeljenje';
import { OdeljenjeService } from '../../services/odeljenje.service';
import { Dijagnoza } from '../../models/dijagnoza';
import { DijagnozaService } from '../../services/dijagnoza.service';

@Component({
  selector: 'app-pacijent-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
  templateUrl: './pacijent-dialog.html',
  styleUrl: './pacijent-dialog.css'
})
export class PacijentDialogComponent implements OnInit {
  public flag!: number;
  public odeljenja!: Odeljenje[];
  public dijagnoze!: Dijagnoza[];

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<PacijentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pacijent,
    public pacijentService: PacijentService,
    public odeljenjeService: OdeljenjeService,
    public dijagnozaService: DijagnozaService
  ) {}

  ngOnInit(): void {
    this.odeljenjeService.getAllOdeljenje().subscribe(odeljenja => this.odeljenja = odeljenja);
    this.dijagnozaService.getAllDijagnoza().subscribe(dijagnoze => this.dijagnoze = dijagnoze);
  }

  compareTo(a: any, b: any) {
    return a.id === b.id;
  }

  public add(): void {
    this.pacijentService.addPacijent(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodat pacijent', 'U redu', { duration: 2500 });
    });
  }

  public update(): void {
    this.pacijentService.updatePacijent(this.data).subscribe(() => {
      this.snackBar.open('Uspešno izmenjen pacijent', 'U redu', { duration: 2500 });
    });
  }

  public delete(): void {
    this.pacijentService.deletePacijent(this.data.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisan pacijent', 'U redu', { duration: 2500 });
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}