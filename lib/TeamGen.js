const inquirer=require('inquirer');
const Employee=require('./lib/Employee');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');
const Manager=require('./lib/Manager');

function TeamGen(){

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

TeamGen.prototype.initializeGen=function(){

};

module.exports = TeamGen;
