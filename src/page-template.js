module.exports = (managerData,engineerData,internData) => {
    //console.log(managerData,engineerData,internData);
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
                      <h4>${managerData.managerName}</h4>
                        <h5><span class="material-icons">coffee</span>Manager</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${managerData.managerEmpID}</li>
                        <li class="list-group-item">Email:${managerData.managerEmail}</li>
                        <li class="list-group-item">Office number:${managerData.managerOfficeNumber}</li>
                      </ul>
                    </div>
                  </div>
                  <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                      <h4>Alex</h4>
                        <h5><span class="material-icons" style="font-size: 24px";>engineering</span>Engineer</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:2</li>
                        <li class="list-group-item">Email:abc@gmail.com</li>
                        <li class="list-group-item">GitHub:abc</li>
                      </ul>
                    </div>
                  </div>
             
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                      <h4>Grace</h4>
                        <h5><span class="material-icons">coffee</span>Engineer</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:3</li>
                        <li class="list-group-item">Email:abc@gmail.com</li>
                        <li class="list-group-item">GitHub:abc</li>
                      </ul>
                    </div>
                  </div>
               <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                      <h4>Tammer</h4>
                        <h5><span class="material-icons">school</span>Engineer</h5>
                     </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:1</li>
                        <li class="list-group-item">Email:abc@gmail.com</li>
                        <li class="list-group-item">Office number:1</li>
                      </ul>
                    </div>
                  </div>
             
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                      <h4>Jared</h4>
                        <h5><span class="material-icons">coffee</span>Manager</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:1</li>
                        <li class="list-group-item">Email:abc@gmail.com</li>
                        <li class="list-group-item">Office number:1</li>
                      </ul>
                    </div>
                
              </div>
      
    </div>
</body>
</html>
    `;
};