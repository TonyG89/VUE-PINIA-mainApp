export default function assertEquals(actual, expected) {
  console.assert(actual === expected, 'Ошибка проверки. Тест не пройден.' + actual + '!=' + expected)
};
