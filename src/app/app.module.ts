import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { TitleComponent } from './title/title.component';
import { TableComponent } from './table/table.component';
import { StarWarsService } from './services/star-wars.service';

import {
  MatExpansionModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSortModule,
  MatTabsModule,
  MatStepperModule,
  MatPaginatorModule,
  MatTableModule,
  MatDividerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatChipsModule,
  MatBadgeModule,
  MAT_DATE_FORMATS,
  MatSlideToggleModule,
  MatTreeModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    TitleComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    MatPaginatorModule,
    CommonModule,
    CdkTableModule,
    HttpClientModule,
    MatExpansionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSortModule,
    MatTabsModule,
    MatStepperModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatChipsModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatTreeModule,
    ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
