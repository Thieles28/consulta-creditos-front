import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreditoService } from '../service/credito.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Credito } from '../model/credito';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss'],
})
export class CreditoComponent implements AfterViewInit, OnInit {
  declare creditoForm: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  credito: Credito | null = null;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private creditoService: CreditoService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  get numeroCredito(): FormControl {
    return this.creditoForm.get('numeroCredito') as FormControl;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.creditoForm = this.fb.group({
      numeroCredito: [''],
    });
  }

  ngAfterViewInit() {}

  consultarCredito() {
    const numeroCredito = this.numeroCredito.value?.trim();

    if (!numeroCredito) {
      this.credito = null;
      return;
    }

    this.creditoService.consultarCredito(numeroCredito).subscribe({
      next: (creditos: Credito) => {
        this.credito = creditos;
      },
      error: (erro: HttpErrorResponse) => {
        this.credito = null;
        if (erro.status === 404) {
          this._snackBar.open('Não foi econtrado créditos!', 'Fechar', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      },
    });
  }
}
