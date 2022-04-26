module.exports = (managerData,engineerData,internData) => {
    //console.log(managerData,engineerData,internData);

    let engineerHTML ='';
    let internHTML='';

    for(let i=0;i < engineerData.length;i++){
        let engineerTemplate = ` <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <h4>${engineerData[i].getName()}</h4>
            <h5><span class="material-icons" style="font-size: 24px";>engineering</span>${engineerData[i].getRole()}</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${engineerData[i].getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${engineerData[i].getEmail()}">${engineerData[i].getEmail()}</a></li>
            <li class="list-group-item">GitHub:<a href="https://github.com/${engineerData[i].getGithub()}" target="_blank">${engineerData[i].getGithub()}</a></li>
          </ul>
        </div>
      </div>`;
        engineerHTML += engineerTemplate;
    }

    for(let i=0;i < internData.length;i++){
      let internTemplate = `<div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h4>${internData[i].getName()}</h4>
          <h5><span class="material-icons">school</span>${internData[i].getRole()}</h5>
       </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${internData[i].getId()}</li>
          <li class="list-group-item">Email:<a href="mailto:${internData[i].getEmail()}">${internData[i].getEmail()}</a></li>
          <li class="list-group-item">School:${internData[i].getSchool()}</li>
        </ul>
      </div>
    </div>`;
      internHTML += internTemplate;
  }
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="hero">
        <h1  class="app-title">My Team</h1>
      </header>
          <div class="mycontainer" >
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                      <h4>${managerData.getName()}</h4>
                        <h5><span class="material-icons">coffee</span>${managerData.getRole()}</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${managerData.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
                        <li class="list-group-item">Office number:${managerData.getOfficeNumber()}</li>
                      </ul>
                    </div>
                  </div>
                 
             ${engineerHTML}
             ${internHTML}
                
    </div>
</body>
</html>
    `;
};