const table = document.getElementById("transaction");
const Name = document.getElementById("Name");
const balance = document.getElementById("balance");
const Amount = document.getElementById("Amount");
const AddExpense = document.querySelector("Button");

window.onload = () => {};

let transactions = [];

AddExpense.addEventListener("click", () => {
  AddData();
  DisplayData();
  displayYourBalance();
});

let AddData = () => {
  let transaction = {
    id: generateID(),
    name: Name.value,
    date: currentDate(),
    amount: Amount.value,
  };
  transactions.push(transaction);

  Name.value = "";
  Amount.value = "";
};

// Generate random ID
let generateID = () => {
  return Math.floor(Math.random() * 100000000);
};
// Generate current DATE
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

let displayYourBalance = () => {
  balance.innerHTML = `$${yourBalance()}`;
};

let yourBalance = () => {
  let sum = 0;

  transactions.map((item) => {
    let Amount = Number(item["amount"]);
    console.log(Amount);
    if (Amount > 0) {
      sum = sum + Amount;
    } else {
      sum = sum - Amount;
    }
  });

  return sum.toFixed(2);
};
