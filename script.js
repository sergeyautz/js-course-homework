//Домашка №1. Студент: Сергей Ауц

// 2
let money;
let time;

money = +prompt("Ваш бюджет на месяц?");
// time = prompt("Введите дату в формате YYYY-MM-DD");

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

// let a = prompt('Введите обязательную статью расходов в этом месяце');
// let b = prompt('Во сколько обойдется?');
// let a2 = prompt('Введите обязательную статью расходов в этом месяце');
// let b2 = prompt('Во сколько обойдется?');

let i = 1;
while (i < 3) {
    let a = prompt('Введите обязательную статью расходов в этом месяце ' + "№ " + i);
    let b = +prompt('Во сколько обойдется?');
    if (a != "" && b != "") {
        appData.expenses[a] = b;
        i++;

    } else {
        alert('Вы ввели пустые значения!');
        continue;
    }

}

console.log(appData);


appData.budgetPerDay = Math.round(money / 30);

if (money <= 1000) {
    document.write("У вас маленький доход!");
} else if (money > 1000 && money < 10000) {

    document.write('У вас средний доход!');
} else if (money >= 10000) {

    document.write("У вас высокий доход!");

} else {
    document.write('Что-то вы ввели не то!')
}

document.write('<br> Ваш бюджет на день:' + appData.budgetPerDay + 'руб.');

document.write(appData.expenses);


// appData.expenses.a1 = a2;
// appData.expenses.a2 = b2;

// 5
