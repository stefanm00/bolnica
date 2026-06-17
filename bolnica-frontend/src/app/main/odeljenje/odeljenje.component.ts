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
import { Odeljenje } from '../../models/odeljenje';
import { OdeljenjeService } from '../../services/odeljenje.service';
import { Bolnica } from '../../models/bolnica';
import { OdeljenjeDialogComponent } from '../../dialogs/odeljenje-dialog/odeljenje-dialog';

@Component({
  selector: 'app-odeljenje',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatIconModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule
  ],
  templateUrl: './odeljenje.component.html',
  styleUrl: './odeljenje.component.css'
})
export class OdeljenjeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'naziv', 'lokacija', 'bolnica', 'actions'];
  dataSource!: MatTableDataSource<Odeljenje>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private odeljenjeService: OdeljenjeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.odeljenjeService.getAllOdeljenje().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const accumulator = (currentTerm: string, key: string) => {
          return key === 'bolnica' ? currentTerm + data.bolnica.naziv : currentTerm + data[key];
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

  public openDialog(flag: number, id?: number, naziv?: string, lokacija?: string, bolnica?: Bolnica) {
    const dialogRef = this.dialog.open(OdeljenjeDialogComponent, {
      data: { id, naziv, lokacija, bolnica }
    });
    (dialogRef.componentInstance as any).flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }
}