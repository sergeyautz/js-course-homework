//Домашка №1. Студент: Сергей Ауц

// 2
let money;
let time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

// 3

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
  
};

// 4

let a1 = prompt('Введите обязательную статью расходов в этом месяце');
let b1 = prompt('Во сколько обойдется?');
let a2 = prompt('Введите обязательную статью расходов в этом месяце');
let b2 = prompt('Во сколько обойдется?');

appData.expenses.a1 = a2;
appData.expenses.a2 = b2;

// 5

alert('Ваш бюджет на месяц: ' + appData.budget / 30);


















