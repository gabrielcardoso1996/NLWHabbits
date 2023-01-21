import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
  const firstDatOfTheYear = dayjs().startOf('year')
  const today = new Date();

  const date = [];
  let compareDate = firstDatOfTheYear;

  while(compareDate.isBefore(today)){
    date.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
  }
  return date;
}
