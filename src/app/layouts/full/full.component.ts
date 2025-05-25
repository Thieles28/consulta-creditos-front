import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

enum Permissao {
  Usuario = 'USER',
  Admin = 'ADMIN',
}

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
  permissoes: Permissao[];
  visible: boolean;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent {
  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  routerActive: string = 'activelink';
  sidebarMenu: sidebarMenu[] = [
    {
      link: '/fiscal',
      icon: 'book',
      menu: 'Nota Fiscal',
      permissoes: [Permissao.Usuario, Permissao.Admin],
      visible: true,
    },
    {
      link: '/credito',
      icon: 'book',
      menu: 'Número Crédito',
      permissoes: [Permissao.Usuario, Permissao.Admin],
      visible: true,
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
}
