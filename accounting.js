'use strict';
let tableEl = document.getElementById("tableID");
let sum ;
let avg;
getData();
avg = sum /length;


function getData() {
    let retrievedData = localStorage.getItem("employee");
    let arrayData = JSON.parse(retrievedData);

    for (let i = 0; i < arrayData.length; i++) {
        let name = arrayData[i].fullName;

        let id = arrayData[i].empid;
        let department = arrayData[i].department;
        let level = arrayData[i].level;
        let salary = arrayData[i].salary;

        let tr = document.createElement("tr");
        tableEl.appendChild(tr);
     

        let priceTd = document.createElement("td")
        priceTd.textContent = name;
        tr.appendChild(priceTd);

        let idTd = document.createElement("td")
        idTd.textContent = id;
        tr.appendChild(idTd);

        let departmentTd = document.createElement("td")
        departmentTd.textContent = department;
        tr.appendChild(departmentTd);

        let levelTD = document.createElement("td")
        levelTD.textContent = level;
        tr.appendChild(levelTD);

        let salaryTD = document.createElement("td")
        salaryTD.textContent = salary;
        tr.appendChild(salaryTD);
    }
}
