export function getMonth(month) {
  const currentDate = new Date();
  const dayIndex = currentDate.getDay() - 1;
  const yearIndex = currentDate.getFullYear();
  let currentMonthCount = 0 - dayIndex;

  const days = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return {
        d: convertJsDate(yearIndex, 1, currentMonthCount),
        a: Date.parse(convertJsDate(yearIndex, 1, currentMonthCount)),
        m: getMonthIndex(Date.parse(convertJsDate(yearIndex, 1, currentMonthCount))),
      };
    });
  });

  return days;
}

function convertJsDate(year, month, day) {
  const daysJsDate = new Date(year, month, day);
  return new Date(daysJsDate);
}

export function getRandomColor() {
  const randomShades = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const color = {
    1: 'indigo',
    2: 'gray',
    3: 'green',
    4: 'blue',
    5: 'red',
    6: 'purple',
    7: 'pink',
    8: 'orange',
  };

  const randomShade = randomShades[Math.floor(Math.random() * randomShades.length)];

  return `bg-${color[randomShade]}-500`;
}

export function getmonth() {
  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'Mei',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'Desember',
  };
  return months[2];
}

export function convertTimeStamp(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);

  const formatedDate = `${day}-${month}-${year}`;

  return formatedDate;
}

export function getDay(timeStamp) {
  const date = new Date(timeStamp);
  const day = date.getDate().toString().padStart(2, '0');

  return day;
}

export function getMonthIndex(timestamp) {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString();

  return month;
}

export function getHours(timestamp) {
  const timeStamp = timestamp * 1000;
  const hours = new Date(timeStamp).toLocaleTimeString();
  return hours;
}
