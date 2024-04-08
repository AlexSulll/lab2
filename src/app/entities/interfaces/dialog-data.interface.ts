/**
 * Интерфейс для данных, получаемых из input
 */
export interface IDialogData
{
  id?: number | null;
  name: string | null;
  numberOfComputer: string | null;
  check: true | null;
  date: string | null;
  game: string | null;
  phone: string | null;
}
