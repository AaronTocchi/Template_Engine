const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        
        super (name, id, email)
        this.github = github;
        
       
    }

    getRole(){
    return "Engineer"
        
    };

    getGitHub(){
        return this.github
    };
    

    
}
// const tim = new Engineer("tom", 4269, "Engineer", "tom@github.com")
// tim.checkClass();
module.exports = Engineer;