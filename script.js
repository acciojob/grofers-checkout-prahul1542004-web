
const table = document.querySelector("table");

const getSumBtn = document.createElement("button");

getSumBtn.textContent = "Get Total Price";

document.body.appendChild(getSumBtn);

const getSum = () => {

    let TotalAmount = 0;

    const ItemPrice = document.querySelectorAll(".price");

    ItemPrice.forEach((item) => {
        TotalAmount += Number(item.textContent);
    });

    // Remove previous total row
    const oldRow = document.querySelector(".total-row");

    if (oldRow) {
        oldRow.remove();
    }

    let tr = document.createElement("tr");
    tr.className = "total-row";

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.textContent = "Total";
    td2.textContent = TotalAmount;

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
