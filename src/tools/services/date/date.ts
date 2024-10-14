import {
  addMinutes,
  differenceInSeconds,
  DifferenceInSecondsOptions,
  format,
  FormatDateOptions,
  isBefore,
  isToday,
  isYesterday,
  parseISO,
  ParseISOOptions,
} from 'date-fns';

export const DateService = {
  /**
   * Calculates the difference between two dates and returns it in various units.
   * @param {Date} startDate - The start date.
   * @param {Date} endDate - The end date.
   * @returns {Object} An object containing the difference in milliseconds, seconds, minutes, and hours.
   */
  calculateDateDifference(startDate: Date, endDate: Date) {
    // Calculate the total difference in seconds
    const totalSeconds = differenceInSeconds(endDate, startDate);

    // Calculate hours, minutes, and seconds from total seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format the result as a string "HH:mm:ss"
    return {
      seconds: String(seconds).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
    };
  },
  addMinutes(val: Date, minutes: number) {
    return addMinutes(val, minutes);
  },
  isDateAlreadyPassed(dateToCheck: Date) {
    return isBefore(dateToCheck, new Date());
  },
  parseISO: (date: string, options: ParseISOOptions): Date => parseISO(date, options),
  format: (date: string | number | Date, formatStr: string, options?: FormatDateOptions) => format(date, formatStr, options),
  isToday: (date: string | number | Date): boolean => isToday(date),
  isYesterday: (date: string | number | Date): boolean => isYesterday(date),
  getDifferenceInSeconds: (dateLeft: Date | number | string, dateRight: Date | number | string, options?: DifferenceInSecondsOptions): number =>
    differenceInSeconds(dateLeft, dateRight, options),
};
