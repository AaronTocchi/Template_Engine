const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")


// The getEmployee/getManager/getEnginner/getIntern functions return their response.
function getEngineer() {

    return inquirer
        .prompt([
            {
                type: "input",
                message: "What's your Engineer's name?",
                name: "name"
                // add some questions
            },
            {
                type: "input",
                message: "What's your Engineer's id?",
                name: "id"
            },
            {
                type: "input",
                message: "What's your Engineer's email?",
                name: "email"
            },
            {
                type: "input",
                message: "Please provide your github account name.",
                name: "github"
            }
        ])
};

function getIntern() {

    return inquirer
        .prompt([
            {
                type: "input",
                message: "What's your Intern's name?",
                name: "name"
                // add some questions
            },
            {
                type: "input",
                message: "What's your Intern's id?",
                name: "id"
            },
            {
                type: "input",
                message: "What's your Intern's email?",
                name: "email"
            },
            {
                type: "input",
                message: "Please provide your School name.",
                name: "school"
            }
        ])
};

let team = [];

async function getData() {

    inquirer.prompt([
        {
            type: "input",
            message: "What's your manager's name?",
            name: "name"
            // add some questions
        },
        {
            type: "input",
            message: "What's your manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What's your manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What's your manager's office number?",
            name: "officeNumber"
        }
    ])
        .then(({ name, id, email, officeNumber }) => {
            // still need to instantiate 
            manager = new Manager(name, id, email, officeNumber);
            team.push(manager)

            getEmployee();
            // run second prompt for employee
            function getEmployee() {
                inquirer.prompt([{
                    type: "list",
                    message: "What role would you like to add in your team?",
                    name: "role",
                    choices: ["Engineer", "Intern", "I don't want to add anymore"]
                }])
                    .then(data => {
                        if (data.role === 'Engineer') {
                            getEngineer()
                                .then(({ name, id, email, github }) => {
                                    engineer = new Engineer(name, id, email, github)
                                    team.push(engineer)
                                    getEmployee();
                                })
                        }
                        else if (data.role === 'Intern') {
                            getIntern()
                                .then(({ name, id, email, school }) => {
                                    intern = new Intern(name, id, email, school)
                                    team.push(intern)
                                    getEmployee();
                                })
                        }
                        //    on i dont want to add anymore call generate html
                        else {
                            console.log(team)
                            let HTML = generateHTML();
                            writeFileAsync("./output/team.html", HTML)
                            // pass team into generateHTML function

                        }
                    })
            }
        })
};
function generateHTML() {
    let HTML = `<!DOCTYPE html>
    <head>
        <title>YO TEAM</title>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    
    
    </head>
    
    <body>
    <header class="jumbotron text-center display-4 text-white bg-danger font-weight-bold"> My Team </header>
    <div class="container jumbotron jumbotron-center" style="max-width: 960px;">
        <div class=row justify-content-center>`

    for (let i = 0; i < team.length; i++) {
        HTML += `<div class="card col-md-3">
            <div class="card-header bg-primary">
                <h5 class="card-title"><span id="name">${team[i].name}</span> 
                <br> 
                ${team[i].getRole()}
                </h5>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <div>ID: ${team[i].id} </div>
                        <div>Email: ${team[i].email}</div>
                        ${makeLowerDiv(team[i])}
                </p>
            </div>
        </div>`
    }

    HTML += `</div></body></html>`
    return HTML;
}
// create function that makes employee specific info member is role and defined as team[i]
function makeLowerDiv(member) {
    if (member.getRole() === "Engineer") {
        return `<div> Github: ${member.github}</div>`
    } else if (member.getRole() === "Intern") {
        return `<div> School: ${member.school} </div>`
    } else if (member.getRole() === "Manager") {
        return `<div> Office: ${member.officeNumber} </div>`
    }
    

}
getData();



// prompt user to enter name id email + specific detail per role
// first prompt manager
    // name
    // id
    // email
    // office number
// then instantiate Manager with new name id office number
// push manager to an array

// prompt user if they want to add another Employee [Intern, Engineer, teamsfull]
    // if user chooses Intern
        // name
        // id
        // email
        // school
        // instantiate Intern push to team array
        // que prompt again

    // if user chooses Engineer
        // name 
        // id
        // email
        // github
        // instantiate Engineer push to team array 
        // que prompt again 

    // if user chooses teamsfull
        // end prompt return team
