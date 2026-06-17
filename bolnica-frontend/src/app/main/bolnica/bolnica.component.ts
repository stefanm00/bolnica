import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Bolnica } from '../../models/bolnica';
import { BolnicaService } from '../../services/bolnica.service';
import { BolnicaDialogComponent } from '../../dialogs/bolnica-dialog/bolnica-dialog';

@Component({
  selector: 'app-bolnica',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatIconModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule
  ],
  templateUrl: './bolnica.component.html',
  styleUrl: './bolnica.component.css'
})
export class BolnicaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'naziv', 'adresa', 'budzet', 'actions'];
  dataSource!: MatTableDataSource<Bolnica>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private bolnicaService: BolnicaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.bolnicaService.getAllBolnica().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(flag: number, id?: number, naziv?: string, adresa?: string, budzet?: number) {
    const dialogRef = this.dialog.open(BolnicaDialogComponent, {
      data: { id, naziv, adresa, budzet }
    });
    (dialogRef.componentInstance as any).flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }
}