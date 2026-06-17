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
import { Pacijent } from '../../models/pacijent';
import { PacijentService } from '../../services/pacijent.service';
import { Odeljenje } from '../../models/odeljenje';
import { Dijagnoza } from '../../models/dijagnoza';
import { PacijentDialogComponent } from '../../dialogs/pacijent-dialog/pacijent-dialog';

@Component({
  selector: 'app-pacijent',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatIconModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule
  ],
  templateUrl: './pacijent.component.html',
  styleUrl: './pacijent.component.css'
})
export class PacijentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'ime', 'prezime', 'zdr_osiguranje', 'datum_rodjenja', 'odeljenje', 'dijagnoza', 'actions'];
  dataSource!: MatTableDataSource<Pacijent>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pacijentService: PacijentService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.pacijentService.getAllPacijent().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const accumulator = (currentTerm: string, key: string) => {
          if (key === 'odeljenje') return currentTerm + data.odeljenje.naziv;
          if (key === 'dijagnoza') return currentTerm + data.dijagnoza.naziv;
          return currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(flag: number, id?: number, ime?: string, prezime?: string, zdr_osiguranje?: boolean, datum_rodjenja?: Date, odeljenje?: Odeljenje, dijagnoza?: Dijagnoza) {
    const dialogRef = this.dialog.open(PacijentDialogComponent, {
      data: { id, ime, prezime, zdr_osiguranje, datum_rodjenja, odeljenje, dijagnoza }
    });
    (dialogRef.componentInstance as any).flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }
}