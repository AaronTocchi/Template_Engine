const Engineer = require("./engineer")
const Intern = require("./intern")
const Manager = require("./manager")

let manager = new Manager('dfgdf', 4, "ddsfdsf", 232323);
let engineer = new Engineer('Aaron', 3, 'aaron@gmail.com', 'aaron')
let intern = new Intern('MeepMorp', 6, 'UCLA')
let team = [manager, engineer, intern]
console.log(team);

function generateHtml(manager, engineer, intern) {
    return `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
          <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          
          <title>Document</title>
          </head>
          <body>
          <header class="jumbotron text-center"> My Team </header>
         
            
          </body>
          `
}
generateHtml(manager, engineer, intern);