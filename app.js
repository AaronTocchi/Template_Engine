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
                    // pass team into generateHTML function

                }
            })
        }
    })
};

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
