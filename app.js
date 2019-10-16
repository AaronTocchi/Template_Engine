const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
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
