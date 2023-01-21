"use strict";

var employee = {
  id: 1,
  employeeName: "Kofi",
  age: 34,
  retire: function retire(date) {
    console.log(date);
  }
};

function kgToLbs(wieght) {
  if (typeof wieght === 'number') return wieght * 2.2;else return parseInt(wieght) * 2.2;
}

kgToLbs(10);
kgToLbs("20kg");