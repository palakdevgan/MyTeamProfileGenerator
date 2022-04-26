module.exports = (managerData,engineerData,internData) => {
    //console.log(managerData,engineerData,internData);

    let engineerHTML ='';
    let internHTML='';

    for(let i=0;i < engineerData.length;i++){
        let engineerTemplate = ` <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <h4>${engineerData[i].name}</h4>
            <h5><span class="material-icons" style="font-size: 24px";>engineering</span>Engineer</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${engineerData[i].id}</li>
            <li class="list-group-item">Email:<a href="mailto:${engineerData[i].email}">${engineerData[i].email}</a></li>
            <li class="list-group-item">GitHub:<a href="https://github.com/${engineerData[i].github}" target="_blank">${engineerData[i].github}</a></li>
          </ul>
        </div>
      </div>`;
        engineerHTML += engineerTemplate;
    }

    for(let i=0;i < internData.length;i++){
      let internTemplate = `<div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h4>${internData[i].name}</h4>
          <h5><span class="material-icons">school</span>Intern</h5>
       </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${internData[i].id}</li>
          <li class="list-group-item">Email:<a href="mailto:${internData[i].email}">${internData[i].email}</a></li>
          <li class="list-group-item">School:${internData[i].school}</li>
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
                      <h4>${managerData.name}</h4>
                        <h5><span class="material-icons">coffee</span>Manager</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${managerData.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${managerData.email}">${managerData.email}</a></li>
                        <li class="list-group-item">Office number:${managerData.officeNumber}</li>
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