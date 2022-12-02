// Score 121
const countHours = (year = 2022, holidays = []) => {
  const flexDate = new Date(year, 0, 1);

  return (
    holidays.filter((holy) => {
      let daymonth = holy.split('/');
      flexDate.setMonth(daymonth[0] - 1);
      flexDate.setDate(daymonth[1]);

      return flexDate.getDay() !== 0 && flexDate.getDay() !== 6;
    }).length * 2
  );
};

// TESTS
const year = 2022;
const holidays = ['01/06', '04/01', '12/25']; // format MM/DD
// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.
console.log(countHours(year, holidays)); // 2 days -> 4 extra hours in the year
