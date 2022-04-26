const inquirer=require('inquirer');
const Engineer=require('./Engineer');
const Intern=require('./Intern');
const Manager=require('./Manager');
const generatePage = require('../src/page-template');

function TeamGen(){
this.engineers=[];
this.interns=[];
this.manager;
}

const promptManagerInfo = () =>{
    return inquirer
    .prompt([
    {
        type:'input',
        name:'managerName',
        message:"What is the Team Manager's name? (Required)",
        validate:managerNameInput => {
            if (managerNameInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Team Manager's name!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'managerEmpID',
        message:"What is the Team Manager's Employee ID? (Required)",
        validate:managerEmpIDInput => {
            if (managerEmpIDInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Team Manager's Employee ID!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'managerEmail',
        message:"What is the Team Manager's email address? (Required)",
        validate:managerEmailInput => {
            if (managerEmailInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Team Manager's email address!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'managerOfficeNumber',
        message:"What is the Team Manager's office number? (Required)",
        validate:managerOfficeNumberInput => {
            if (managerOfficeNumberInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Team Manager's office number!");
                    return false;
                  }
        }
    }
    ]);
};

const promptEngineerInfo = () =>{
    return inquirer
    .prompt([
    {
        type:'input',
        name:'engineerName',
        message:"What is the Engineer's name? (Required)",
        validate:engineerNameInput => {
            if (engineerNameInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Engineer's name!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'engineerEmpID',
        message:"What is the Engineer's Employee ID? (Required)",
        validate:engineerEmpIDInput => {
            if (engineerEmpIDInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Engineer's Employee ID!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'engineerEmail',
        message:"What is the Engineer's email address? (Required)",
        validate:engineerEmailInput => {
            if (engineerEmailInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Engineer's email address!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'engineerGithub',
        message:"What is the Engineer's Github username? (Required)",
        validate:engineerGithubInput => {
            if (engineerGithubInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Engineer's Github username!");
                    return false;
                  }
        }
    }
    ]);
};

const promptInternInfo = () =>{
    return inquirer
    .prompt([
    {
        type:'input',
        name:'internName',
        message:"What is the Intern's name? (Required)",
        validate:internNameInput => {
            if (internNameInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Intern's name!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'internEmpID',
        message:"What is the Intern's Employee ID? (Required)",
        validate:internEmpIDInput => {
            if (internEmpIDInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Intern's Employee ID!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'internEmail',
        message:"What is the Intern's email address? (Required)",
        validate:internEmailInput => {
            if (internEmailInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Intern's email address!");
                    return false;
                  }
        }
    },
    {
        type:'input',
        name:'internSchool',
        message:"Which is the Intern's School? (Required)",
        validate:internSchoolInput => {
            if (internSchoolInput) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("Please enter the Intern's School Name!");
                    return false;
                  }
        }
    }
    ]);
};

TeamGen.prototype.initializeGen=function(){
promptManagerInfo()
.then((managerData) => {
this.manager = new Manager(managerData.managerName,managerData.managerEmpID,managerData.managerEmail,managerData.managerOfficeNumber);
this.showMenu();
});
};

TeamGen.prototype.showMenu = function(){
inquirer
.prompt({
    type:'list',
    message: 'What would you like to do?',
    name:'action',
    choices:['Add an Engineer','Add an Intern','Finish Building my Team']
})
.then(({action}) => {
    if(action === 'Add an Engineer'){
    promptEngineerInfo().then((engineerData) => {
        this.engineers.push(new Engineer(engineerData.engineerName,engineerData.engineerEmpID,engineerData.engineerEmail,engineerData.engineerGithub));
        this.showMenu();
        });
    }
    else if(action === 'Add an Intern'){
        promptInternInfo().then((internData) => {
            this.interns.push(new Intern(internData.internName,internData.internEmpID,internData.internEmail,internData.internSchool));
            this.showMenu();
            });
    }
    else{
   //this.template({Manager:this.manager,Engineers:this.engineers,Interns:this.interns});
       generatePage(this.manager,this.engineers,this.interns)
       .then(pageHTML =>{
        fs.writeFile("../dist/index.html", pageHTML, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
       });
    }
})
};

module.exports = TeamGen;
