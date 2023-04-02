let tbody = document.querySelector("tbody");

async function getData() {
  return await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"
  )
    .then((response) => response.json())
    .then(function (result) {
      return result;
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

window.addEventListener("load", async (event) => {
  let data = await getData();

  //   Building the table
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    let num = document.createElement("td");
    num.innerHTML = `${i + 1}`;
    tr.appendChild(num);
    let id = document.createElement("td");
    id.innerHTML = data[i].id;
    tr.appendChild(id);
    let symbol = document.createElement("td");
    symbol.innerHTML = data[i].symbol;
    tr.appendChild(symbol);
    let name = document.createElement("td");
    name.innerHTML = data[i].name;
    tr.appendChild(name);
    if (i < 5) tr.style.backgroundColor = "blue";
    if (data[i].symbol == "usdt") tr.style.backgroundColor = "green";
    tbody?.appendChild(tr);
  }
});
