'use strict';
let emploees=[];
let tableEl = document.getElementById("tableID");
let tableFooterEl=document.getElementById("tableFooter");





function getData() {
    let retrievedData = localStorage.getItem("emps");
    emploees = JSON.parse(retrievedData);
   
    }

    

getData();

renderTable();