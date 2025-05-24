import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CreditoService } from '../service/credito.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Credito } from '../model/credito';

@Component({
  selector: 'app-credito',
  templateUrl: './fiscal.component.html',
  styleUrls: ['./fiscal.component.scss'],
})
export class FiscalComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'numeroCredito',
    'numeroNfse',
    'dataConstituicao',
    'valorIssqn',
    'tipoCredito',
    'simplesNacional',
    'aliquota',
    'valorFaturado',
    'valorDeducao',
    'baseCalculo',
  ];

  dataSource = new MatTableDataSource<Credito>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private creditoService: CreditoService,
    public dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.listarCreditos();
  }

  listarCreditos() {
    this.creditoService.listarCreditos('').subscribe({
      next: (credito: Credito[]) => {
        if (credito) {
          this.dataSource.data = credito;
        }
      },
      error: (erro) => {
        console.error('Erro ao retornar credito:', erro);
      },
    });
  }

  applyFilter(event: Event) {
    const numeroNfse = (event.target as HTMLInputElement).value.trim();
    if (!numeroNfse) {
      this.dataSource.data = [];
      return;
    }
    this.creditoService.listarCreditos(numeroNfse).subscribe({
      next: (creditos: Credito[]) => {
        this.dataSource.data = creditos;
      },
      error: (erro) => {
        console.error('Erro ao buscar créditos:', erro);
      },
    });
  }
}
