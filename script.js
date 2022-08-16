const table = document.getElementById("table");
const Name = document.getElementById("Name");
const Date = document.getElementById("Date");
const Amount = document.getElementById("Amount");
const AddExpense = document.querySelector("Button");

let Arrays = [];

AddExpense.addEventListener("click", () => {
  AddData();
  DisplayData();
});

let AddData = () => {
  let Data = {
    id: Arrays.length + 1,
    name: Name.value,
    date: Date.value,
    amount: Amount.value,
  };
  Arrays.push(Data);
};

let DisplayData = () => {
  let Data = "";
  const result = Arrays.map((item) => {
    Data += `<tr>
    <th scope="row">${item["id"]}</th>
    <td> ${item["name"]} </td>
    <td>${item["date"]}</td>
    <td> ${item["amount"]} </td>
  </tr>`;
  });

  table.innerHTML = Data;
};
