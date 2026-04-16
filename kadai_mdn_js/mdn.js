const 年 = year => new Date(year, 0, 1);
const　月 = (year, month) => new Date(year, month - 1, 1);
const 日 = (year, month, day) => new Date(year, month - 1, day);
console.log(年(2024)); // 2024-01-01T00:00:00.000Z
console.log(月(2024, 6)); 
// 2024-05-31T23:00:00.000Z
console.log(日(2024, 6, 1)); 
// 2024-06-01T00:00:00.000Z