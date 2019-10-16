"use strict"
const fs = require("fs");
const inquirer = require("inquirer");

//main class
class Employee {
    constructor( name, id, title) {
      this.name = name;
      this.id = id;
      this.title = title;
    
    }

//  getName(){
//         inquirer
//     .prompt(
//       {
//         type: "input",
//         message: "Enter employee name",
//         name: "name"
//       }
//     ).then(function(data){
//         console.log(data)
//     })
    // getId( );
    // getEmail( );
    getRole(){
        return this.title = "Employee"
    }
     //returns Employee
};
module.exports = Employee;