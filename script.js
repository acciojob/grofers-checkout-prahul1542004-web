const table = document.querySelector("table");

const getSumBtn = document.createElement("button");
const ItemPrice = document.querySelectorAll(".price");

getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    let TotalAmount = 0;

    ItemPrice.forEach((item) => {
        TotalAmount += Number(item.textContent);
    });

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.textContent = "Total";
    td2.textContent = TotalAmount;

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);