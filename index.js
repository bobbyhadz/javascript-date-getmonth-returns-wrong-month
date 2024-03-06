// EXAMPLE 1 - Date.getMonth() returns the wrong month in JavaScript

const date = new Date('2023-04-24');

console.log(date.getMonth()); // 👉️ 3

console.log(date.getMonth() + 1); // 👉️ 4

// ------------------------------------------------------------------

// // EXAMPLE 2 - The Date() constructor takes a zero-based month

// const date = new Date(2023, 0, 24, 9, 30, 16);

// // 👇️ 2023-01-24T07:30:16.000Z
// console.log(date);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Date.getDay() returns the wrong day in JavaScript

// const date = new Date('2022-04-24');

// console.log(date); // 👉️ Sun Apr 24 2022

// const dayOfMonth = date.getDate();
// console.log(dayOfMonth); // 👉️ 24

// ------------------------------------------------------------------

// // EXAMPLE 4 - getDate() returns the wrong date in JavaScript

// // 👇️ formatted as YYYY-MM-DD hh:mm:ss
// const dateStr = '2022-09-24 07:30:24';

// const [dateComponents, timeComponents] = dateStr.split(' ');
// console.log(dateComponents); // 👉️ 2022-09-22
// console.log(timeComponents); // 👉️ 07:30:24

// const [year, month, day] = dateComponents.split('-');

// const [hours, minutes, seconds] = timeComponents.split(':');

// // ✅ Create Date using multiple, comma-separated parameters
// const date = new Date(
//   +year,
//   +month - 1,
//   +day,
//   +hours,
//   +minutes,
//   +seconds,
// );

// console.log(date); // 👉️ Sat Sep 24 2022 07:30:24

// console.log(date.getDate()); // 👉️ 24
