console.log("Time Converter");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateTime = {
  dateObject: (randomDate = null) => {
    if (randomDate) {
      return new Date(randomDate);
    } else {
      return new Date();
    }
  },

  date: dateTimeObject => {
    return dateTimeObject.getDate();
  },
  month: dateTimeObject => {
    return dateTimeObject.getMonth();
  },
  year: dateTimeObject => {
    return dateTimeObject.getFullYear();
  },
  day: dateTimeObject => {
    const index =  dateTimeObject.getDay() - 1;
    return days[index];
  },
  displayDate: dateTimeObject => {
    const showDay = dateTime.day(dateTimeObject);
    const showDate = dateTime.date(dateTimeObject);
    const showMonth = dateTime.month(dateTimeObject);
    const showYear = dateTime.year(dateTimeObject);
    const showDateFull = `${showDay}, ${showDate}, ${showMonth}, ${showYear}`;
    return showDateFull;
  }
};

const nowDate = dateTime.dateObject();
const dateRandom = dateTime.displayDate();

console.log("Today date : ", nowDate);

const nowDateFull = dateTime.displayDate(nowDate);
const dateFull = dateTime.displayDate(dateRandom);

console.log(nowDateFull);
console.log(dateFull);
