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
import { Dijagnoza } from '../../models/dijagnoza';
import { DijagnozaService } from '../../services/dijagnoza.service';
import { DijagnozaDialogComponent } from '../../dialogs/dijagnoza-dialog/dijagnoza-dialog';

@Component({
  selector: 'app-dijagnoza',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatIconModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule
  ],
  templateUrl: './dijagnoza.component.html',
  styleUrl: './dijagnoza.component.css'
})
export class DijagnozaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'naziv', 'opis', 'oznaka', 'actions'];
  dataSource!: MatTableDataSource<Dijagnoza>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dijagnozaService: DijagnozaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.dijagnozaService.getAllDijagnoza().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(flag: number, id?: number, naziv?: string, opis?: string, oznaka?: string) {
    const dialogRef = this.dialog.open(DijagnozaDialogComponent, {
      data: { id, naziv, opis, oznaka }
    });
    (dialogRef.componentInstance as any).flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }
}