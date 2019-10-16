const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, title , github){
        
        super (name, id, "Engineer", github)
        this.github = github;
        
       
    }
    checkClass(){
        console.log(this);
    };
    

    
}
const tim = new Engineer("tom", 4269, "Engineer", "tom@github.com")
tim.checkClass();