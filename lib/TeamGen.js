const inquirer=require('inquirer');
const Engineer=require('./Engineer');
const Intern=require('./Intern');
const Manager=require('./Manager');
const generatePage = require('../src/page-template');
const fs=require('fs');

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
            if ((typeof managerNameInput === 'string') && managerNameInput && isNaN(managerNameInput)) 
                  {
                    return true;

                  } 
                  else 
                  {
                    console.log("\nPlease enter Team Manager's valid name!");
                    return false;
                  }
        },
        filter: managerNameInput => {
          // clear the invalid input
          return ((typeof managerNameInput === 'string') && managerNameInput && isNaN(managerNameInput)) ? managerNameInput : ''
      }
    },
    {
        type:'input',
        name:'managerEmpID',
        message:"What is the Team Manager's Employee ID? (Required)",
        validate:managerEmpIDInput => {
            if (isNaN(managerEmpIDInput) || !managerEmpIDInput) 
                  {
                    console.log("\nPlease enter Team Manager's valid Employee ID!");
                  } 
                  else 
                  {
                    return true;
                  }
        },
        filter: managerEmpIDInput => {
          // clear the invalid input
          return !(isNaN(managerEmpIDInput) || !managerEmpIDInput) ? managerEmpIDInput :''
      }
    },
    {
        type:'input',
        name:'managerEmail',
        message:"What is the Team Manager's email address? (Required)",
        validate:managerEmailInput => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmailInput)
            if (managerEmailInput && valid) 
                  {
                    return true;
                  } 
                  else 
                  {
                    console.log("\nPlease enter Team Manager's valid email address!");
                    return false;
                  }
        },
        filter: managerEmailInput => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmailInput)
          // clear the invalid input
          return (managerEmailInput && valid) ? managerEmailInput :''
      }
    },
    {
        type:'input',
        name:'managerOfficeNumber',
        message:"What is the Team Manager's office number? (Required)",
        validate:managerOfficeNumberInput => {
          if (isNaN(managerOfficeNumberInput) || !managerOfficeNumberInput) 
          {
            console.log("\nPlease enter Team Manager's valid office number!");
          } 
          else 
          {
            return true;
          }
        },
        filter: managerOfficeNumberInput => {
          // clear the invalid input
          return !(isNaN(managerOfficeNumberInput) || !managerOfficeNumberInput) ? managerOfficeNumberInput :''
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
          if ((typeof engineerNameInput === 'string') && engineerNameInput && isNaN(engineerNameInput)) 
                  {
                    return true;

                  } 
                  else 
                  {
                    console.log("\nPlease enter Engineer's valid name!");
                    return false;
                  }
        },
        filter: engineerNameInput => {
          // clear the invalid input
          return ((typeof engineerNameInput === 'string') && engineerNameInput && isNaN(engineerNameInput)) ? engineerNameInput : ''
      }
    },
    {
        type:'input',
        name:'engineerEmpID',
        message:"What is the Engineer's Employee ID? (Required)",
        validate:engineerEmpIDInput => {
          if (isNaN(engineerEmpIDInput) || !engineerEmpIDInput) 
          {
            console.log("\nPlease enter Engineer's valid Employee ID!");
          } 
          else 
          {
            return true;
          }
        },
        filter: engineerEmpIDInput => {
          // clear the invalid input
          return !(isNaN(engineerEmpIDInput) || !engineerEmpIDInput) ? engineerEmpIDInput :''
      }
    },
    {
        type:'input',
        name:'engineerEmail',
        message:"What is the Engineer's email address? (Required)",
        validate:engineerEmailInput => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmailInput)
          if (engineerEmailInput && valid) 
                {
                  return true;
                } 
                else 
                {
                  console.log("\nPlease enter Engineer's valid email address!");
                  return false;
                }
        },
        filter: engineerEmailInput => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmailInput)
          // clear the invalid input
          return (engineerEmailInput && valid) ? engineerEmailInput :''
      }
    },
    {
        type:'input',
        name:'engineerGithub',
        message:"What is the Engineer's Github username? (Required)",
        validate:engineerGithubInput => {
          if ((typeof engineerGithubInput === 'string') && engineerGithubInput && isNaN(engineerGithubInput)) 
          {
            return true;

          } 
          else 
          {
            console.log("\nPlease enter Engineer's valid Github username!");
            return false;
          }
        },
        filter: engineerGithubInput => {
          // clear the invalid input
          return ((typeof engineerGithubInput === 'string') && engineerGithubInput && isNaN(engineerGithubInput)) ? engineerGithubInput : ''
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
          if ((typeof internNameInput === 'string') && internNameInput && isNaN(internNameInput)) 
          {
            return true;

          } 
          else 
          {
            console.log("\nPlease enter Intern's valid name!");
            return false;
          }
        },
        filter: internNameInput => {
          // clear the invalid input
          return ((typeof internNameInput === 'string') && internNameInput && isNaN(internNameInput)) ? internNameInput : ''
      }
    },
    {
        type:'input',
        name:'internEmpID',
        message:"What is the Intern's Employee ID? (Required)",
        validate:internEmpIDInput => {
          if (isNaN(internEmpIDInput) || !internEmpIDInput) 
          {
            console.log("\nPlease enter Intern's valid Employee ID!");
          } 
          else 
          {
            return true;
          }
        },
        filter: internEmpIDInput => {
          // clear the invalid input
          return !(isNaN(internEmpIDInput) || !internEmpIDInput) ? internEmpIDInput :''
      }
    },
    {
        type:'input',
        name:'internEmail',
        message:"What is the Intern's email address? (Required)",
        validate:internEmailInput => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmailInput)
          if (internEmailInput && valid) 
                {
                  return true;
                } 
                else 
                {
                  console.log("\nPlease enter Intern's valid email address!");
                  return false;
                }
        },
        filter: internEmailInput => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmailInput)
          // clear the invalid input
          return (internEmailInput && valid) ? internEmailInput :''
      }
    },
    {
        type:'input',
        name:'internSchool',
        message:"Which is the Intern's School? (Required)",
        validate:internSchoolInput => {
          if ((typeof internSchoolInput === 'string') && internSchoolInput && isNaN(internSchoolInput)) 
          {
            return true;

          } 
          else 
          {
            console.log("\nPlease enter Intern's valid School name!");
            return false;
          }
        },
        filter: internSchoolInput => {
          // clear the invalid input
          return ((typeof internSchoolInput === 'string') && internSchoolInput && isNaN(internSchoolInput)) ? internSchoolInput : ''
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
        fs.writeFile("./dist/index.html", generatePage(this.manager,this.engineers,this.interns), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    }
})
};

module.exports = TeamGen;
