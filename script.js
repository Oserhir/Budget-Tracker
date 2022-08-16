const table = document.getElementById("table");
const Name = document.getElementById("Name").value;
const Date = document.getElementById("Date").value;
const Amount = document.getElementById("Amount").value;

console.log(`${Name} ${Date} ${Amount}`);

let Array = [];

let myArr = [
  { id: 1, name: "mcdonald", date: "07/12/2024", Amount: 30 },
  { id: 2, name: "Mila", date: "07/12/2024", Amount: 40 },
];

let DisplayTable = () => {
  let Afficher = "";
  for (let i = 0; i < myArr.length; i++) {
    Afficher += `   <tr>
    <th scope="row">${myArr[i]["id"]}</th>
    <td> ${myArr[i]["name"]} </td>
    <td>${myArr[i]["date"]}</td>
    <td> ${myArr[i]["Amount"]} </td>
  </tr>`;
  }

  table.innerHTML = Afficher;
};

DisplayTable();
