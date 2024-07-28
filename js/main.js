"use strict";
const formValue = document.getElementById("expense-form");
const expName = document.getElementById("expense-name");
const expAmount = document.getElementById("expense-amount");
const expDate = document.getElementById("expense-date");

let expenseUser = [];

document.addEventListener("DOMContentLoaded", () => {
  expenseUser = JSON.parse(localStorage.getItem("expenseUser")) || [];
  displayData();
  updateTotalExpenses();
});

formValue.addEventListener("submit", function (event) {
  event.preventDefault();
  addExpense();
  displayData();
  updateTotalExpenses();
  formValue.reset();
});

const addExpense = function () {
  const expense = {
    name: expName.value,
    amount: parseFloat(expAmount.value),
    date: expDate.value,
  };
  expenseUser.push(expense);
  saveToLocalStorage();
};

const displayData = function () {
  let cartona = ``;
  expenseUser.forEach((expense, index) => {
    cartona += `
    <tr>
      <td>${expense.name}</td>
      <td>${expense.date}</td>
      <td>$ ${expense.amount}</td>
      <td><Button class='btn btn-danger' onclick="deleteExpense(${index})">Delete</Button></td>
    </tr>
    `;
  });
  document.getElementById("expense-list").innerHTML = cartona;
};

const deleteExpense = function (i) {
  expenseUser.splice(i, 1);
  saveToLocalStorage();
  displayData();
  updateTotalExpenses();
};

const updateTotalExpenses = function () {
  let totalExpenses = expenseUser.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  document.getElementById(
    "total-expenses"
  ).innerText = `$ ${totalExpenses.toFixed(2)}`;
};

const saveToLocalStorage = function () {
  localStorage.setItem("expenseUser", JSON.stringify(expenseUser));
};
