import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe ({
  name: 'dateFormatPipe',
  standalone: true,
  pure: true
})

export class dateFormatPipe implements PipeTransform {
  constructor (
    private dateTransform: DatePipe
  ) {
  }
  /**
   * Делаем из full даты дату по маске
   * @param value
   * @param format
   * @param timezone
   * @param locale
   */
  transform(value: Date | string | number | null | undefined, format?: string, timezone?: string, locale?: string): string | null {
    return this.dateTransform.transform(value, format || 'dd.MM.yyyy', timezone, locale);
  }
}
