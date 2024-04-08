import { IColumn } from "../interfaces/column.interface";

export const COLUMNS_SCHEMA: IColumn[] = [
  {
    key: "name",
    type: "text",
    label: "ФИО"
  },
  {
    key: "numberOfComputer",
    type: "number",
    label: "Номер комьютера"
  },
  {
    key: "date",
    type: "date",
    label: "Дата бронирования"
  },
  {
    key: "game",
    type: "text",
    label: "Игра"
  },
  {
    key: "phone",
    type: "text",
    label: "Номер телефона"
  },
  {
    key: "edit",
    type: "button",
    label: "Редактировать запись"
  },
  {
    key: "button",
    type: "button",
    label: "Удалить запись"
  }
]
