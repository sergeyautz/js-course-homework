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

let expMustHaveName = prompt('Введите обязательную статью расходов в этом месяце');
let expMustHaveAmount = prompt('Во сколько обойдется?');

appData.expenses.expMustHaveName = expMustHaveAmount;

// 5

alert('Ваш бюджет на месяц: ' + appData.budget / 30);
console.log('Hello World!');

















