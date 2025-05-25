import { CreditoComponent } from './credito/credito.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { FiscalComponent } from './fiscal/fiscal.component';

const routes: Routes = [
  { path: '', redirectTo: '/fiscal', pathMatch: 'full' },
  {
    path: '',
    component: FullComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/fiscal', pathMatch: 'full' },
      { path: 'fiscal', component: FiscalComponent },
      { path: 'credito', component: CreditoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
