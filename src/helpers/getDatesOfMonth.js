import assertEquals from './assertEquals';

export default function getDatesOfMonth(month, year) {
  return new Date(year, month+1, 0).getDate()
}
assertEquals(getDatesOfMonth(0,2000), 31)
assertEquals(getDatesOfMonth(2,2004), 31)
assertEquals(getDatesOfMonth(1,2020), 29)
assertEquals(getDatesOfMonth(1,2021), 28)
assertEquals(getDatesOfMonth(1,2022), 29)
assertEquals(getDatesOfMonth(1,2024), 28)