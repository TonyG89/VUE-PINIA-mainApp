import assertEquals from './assertEquals';

export default function getDaysOfMonth(month, year) {
  return new Date(year, month+1, 0).getDate()
}
assertEquals(getDaysOfMonth(0,2000), 31)
assertEquals(getDaysOfMonth(2,2004), 31)
assertEquals(getDaysOfMonth(1,2020), 29)
assertEquals(getDaysOfMonth(1,2021), 28)
assertEquals(getDaysOfMonth(1,2022), 29)
assertEquals(getDaysOfMonth(1,2024), 28)