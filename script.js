const table = document.getElementById("transaction");
const Name = document.getElementById("Name");
const Total = document.getElementById("balance");

const Amount = document.getElementById("Amount");
const AddExpense = document.querySelector("Button");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");

let transactions = [];

AddExpense.addEventListener("click", () => {
  AddData();
  DisplayData();
  yourBalance();
});

let AddData = () => {
  let transaction = {
    id: generateID(),
    name: Name.value,
    date: currentDate(),
    amount: parseInt(Amount.value),
  };
  transactions.push(transaction);

  Name.value = "";
  Amount.value = "";
};

// Generate random ID
let generateID = () => {
  return Math.floor(Math.random() * 100000000);
};

// current DATE
let currentDate = () => {
  const date = new Date();
  let currentDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return currentDate;
};

let DisplayData = () => {
  let Data = "";
  const result = transactions.map((item) => {
    Data += `<li>
    ${item["name"]}
    <div>
      <span class= ${
        Number(item["amount"]) > 0 ? "income" : "expense"
      }  > $${Math.abs(Number(item["amount"]))}  </span>
        
    </div>
  </li> `;
  });
  // <span class="material-symbols-outlined"> delete </span>
  table.innerHTML = Data;
};

let yourBalance = () => {
  const amounts = transactions.map((amount) => {
    return amount["amount"];
  });

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => {
      return item > 0;
    })
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => {
      return item < 0;
    })
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  moneyPlus.innerText = `+${income}`;
  moneyMinus.innerText = `${expense}`;
  Total.innerText = `$${total}`;
};
