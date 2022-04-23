'use strict';
let senior_salary;
let mid_senior_salary;
let junior_salary;
function Employee( empid, fullName, department ,level, image ) {
    this.Empid = empid;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    

    // allEmployee.push(this);
}
let Employee1 = new Employee("1000","Ghazi Samer","Administration","Senior");
let Employee2 = new Employee("1001","Lana Ali","Finance","Senior");
let Employee3 = new Employee("1002","Tamara Ayoub","Marketing","Senior");
let Employee4 = new Employee("1003","Safi Walid","Administration","mid-Senior");
let Employee5 = new Employee("1004","Omar Zaid","Development","Senior");
let Employee6 = new Employee("1005","Rana Saleh","Development","junior");
let Employee7 = new Employee("1006","Hadi Ahmad","Finance","mid-Senior");

Employee.prototype.render = function (){
    if (this.level === "Senior"){
        this.salary = salarySenior();
    }
    else if (this.level === "mid_senior"){
        this.salary = midSeniorSalary();
    }
    else {
        this.salary = juniorSalary();
    }
    document.write(`<h1> the name of the employee is: ${this.fullName}</h1>`)
     document.write(`<h1> the salary is: ${this.salary} </h1>`)
}

function salarySenior (){
  senior_salary= Math.floor(Math.random()*(2000-1500+1)+1500);
  senior_salary=senior_salary-senior_salary*0.075;
  console.log("1");
  return senior_salary;
}

function midSeniorSalary (){
    mid_senior_salary= Math.floor(Math.random()*(1500-1000+1)+1000);
    mid_senior_salary=mid_senior_salary-mid_senior_salary*0.075;
    console.log("2");
    return mid_senior_salary;
  }

  function juniorSalary (){
    junior_salary= Math.floor(Math.random()*(1000-500+1)+500);
    junior_salary=junior_salary-junior_salary*0.075;
    return junior_salary;
  }


Employee1.render();
Employee2.render();
Employee3.render();
Employee4.render();
Employee5.render();
Employee6.render();



