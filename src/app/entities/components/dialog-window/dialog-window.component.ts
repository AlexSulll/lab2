import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from "@angular/forms";
import { DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS } from "@angular/material/core";
import { IDialogData } from "../../interfaces/dialog-data.interface";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilderService } from "../../services/form-builder.service";
import { provideNgxMask } from "ngx-mask";
import { APP_DATE_FORMATS, AppDateAdapter } from "../../adapters/date.adapter";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dialog-window',
  providers: [provideNgxMask(), {provide: DateAdapter, useClass: AppDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}],
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent implements OnInit {
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  public pcClubForm: FormGroup = this._formBuilderService.pcClubForm;
  constructor(
    private readonly _formBuilderService: FormBuilderService,
    public dialogRef: MatDialogRef<DialogWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
  ) { }
  /**
   * Функция, которая передает данные в форму, для дальнейших изменений
   */
  public ngOnInit(): void {
    this.pcClubForm.setValue(this.data);
  }
  /**
   * Функция для добавления новых данных в таблицу. Объект строится по интерфейсу и передается
   * после закрытия диалогового окна.
   */
  public add(): void {
    const formValue: IDialogData = this.pcClubForm.getRawValue();
    this.dialogRef.close(formValue);
  }
  /**
   * Функция для закрытия окна при нажатии кнопки "Отмена"
   * никаких данных мы не передаем
   */
  public close(): void {
    this.dialogRef.close();
  }
  /**
   * Функция, которая возвращает дату в данных момент времени.
   * Создана для ограничения ввода будущей даты
   */
  public getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * функция для ограничения даты в 1900 год
   */
  public minDate(): Date {
    return new Date(1900, 0, 1);
  }
  public get nameControl(): FormControl {
    return this.pcClubForm.get('name') as FormControl<string | null>;
  }
  public get numberOfComputerControl(): FormControl {
    return this.pcClubForm.get('numberOfComputer') as FormControl<string | null>;
  }
  public get dateControl(): FormControl {
    return this.pcClubForm.get('date') as FormControl<string | null>;
  }
  public get gameControl(): FormControl {
    return this.pcClubForm.get('game') as FormControl<string | null>;
  }
  public get checkControl(): FormControl {
    return this.pcClubForm.get('check') as FormControl<string | null>;
  }
  public get phoneControl(): FormControl {
    return this.pcClubForm.get('phone') as FormControl<string | null>;
  }
}
