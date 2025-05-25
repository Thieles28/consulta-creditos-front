import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFlexyModule } from './demo-flexy-module';
import { FullComponent } from './layouts/full/full.component';

// Modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CreditoComponent } from './credito/credito.component';
import { FiscalComponent } from './fiscal/fiscal.component';

@NgModule({
  declarations: [AppComponent, FullComponent, CreditoComponent, FiscalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    DemoFlexyModule,
    NgApexchartsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
