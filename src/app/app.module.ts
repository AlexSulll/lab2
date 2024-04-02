import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatTableModule } from "@angular/material/table";
import { DialogWindowComponent } from './entities/components/dialog-window/dialog-window.component';
import { DateFormatPipe } from "./entities/pipes/date-format.pipe";
import { PhoneFormatPipe } from "./entities/pipes/phone-format.pipe";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DatePipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    DialogWindowComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    DateFormatPipe,
    PhoneFormatPipe,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  providers: [MatDialog, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
