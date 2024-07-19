import { format } from "date-fns";

export function dateFormatter(date?: Date | string, returnFormat?: string) {
  let targetDate: Date;

  try {
    if (!date) {
      targetDate = new Date();
    } else if (typeof date === "string") {
      targetDate = new Date(date);
    } else {
      targetDate = date;
    }
  } catch (e) {
    targetDate = new Date();
  }

  return format(targetDate, returnFormat || "yy. MM. dd");
}

export function getIsRecentPost(createdAt: string): boolean {
  const parseDate = (createdAt: string) => new Date(createdAt);
  const postDate = parseDate(createdAt);
  const currentDate = new Date();
  const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
  return currentDate.getTime() - postDate.getTime() < oneWeekInMillis;
}

export function addDays(date: Date | string, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
