import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { IDialogData } from "./entities/interfaces/dialog-data.interface";
import { DialogWindowComponent } from "./entities/components/dialog-window/dialog-window.component";
import { IColumn } from "./entities/interfaces/column.interface";
import { USER_DATA } from "./entities/shared/user-data";
import { COLUMNS_SCHEMA } from "./entities/shared/columns-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public displayedColumns: string[] = COLUMNS_SCHEMA.map((colum: IColumn) => colum.key);
  public dataSource: any = USER_DATA;
  constructor(
    public dialog: MatDialog
  ) {
  }
  /**
   * Функция удаления строки таблицы по id
   * @param id - id элемента
   */
  public removeRow(id: number): void {
    this.dataSource = this.dataSource.filter((element: IDialogData) => element.id !== id);
  }
  public openDialog(): void {
    const dialogRef: MatDialogRef<DialogWindowComponent> = this.dialog.open(DialogWindowComponent, {width: '550px', data: {id: (this.dataSource[this.dataSource.length - 1].id + 1 ?? 0), name: '', numberOfComputer: '', date: '', game: '', check: '', phone: ''}});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const value = {id: (this.dataSource[this.dataSource.length - 1].id + 1 ?? 0), ...result}
        this.dataSource = [...this.dataSource, value];
      }
    });
  }
  public openDialogEdit(id: number): void {
    const editElement = this.dataSource.find((element: IDialogData) => element.id === id);
    editElement.date = new Date(editElement.date);
    const dialogRef: MatDialogRef<DialogWindowComponent> = this.dialog.open(DialogWindowComponent, {width: '550px', data: editElement});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.forEach ((item: object, index: number): void => {
          if (this.dataSource[index] == editElement) {
            const newDataSource = JSON.parse(JSON.stringify(this.dataSource));
            newDataSource[index] = result;
            this.dataSource = newDataSource;
          }
        });
      }
    });
  }
}
