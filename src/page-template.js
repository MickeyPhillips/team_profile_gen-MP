const Employee = require('../lib/Employee')

// Manager Card
const manager = managerData => {
    return `
<div class="card">
    <div class="card-header">
        <h1>${managerData.getRole()}</h1>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ${managerData.getName()}
            </li>
            <li class="list-group-item">
                ${managerData.getId()}
            </li>
            <li class="list-group-item">
                ${managerData.getEmail()}
            </li>
            <li class="list-group-item">
                ${managerData.getOfficeNumber()}
            </li>
    </div>
</div>
`
}
// Engineer Card
const engineer = engineerData => {
    return `
<div class="card">
    <div class="card-header">
        <h1>${engineerData.getRole()}</h1>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ${engineerData.getName()}
            </li>
            <li class="list-group-item">
                ${engineerData.getId()}
            </li>
            <li class="list-group-item">
                ${engineerData.getEmail()}
            </li>
            <li class="list-group-item">
                ${engineerData.getGithub()}
            </li>
    </div>
</div>
`
}
// Intern Card
const intern = internData => {
    return `
<div class="card">
    <div class="card-header">
        <h1>${internData.getRole()}</h1>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ${internData.getName()}
            </li>
            <li class="list-group-item">
                ${internData.getId()}
            </li>
            <li class="list-group-item">
                ${internData.getEmail()}
            </li>
            <li class="list-group-item">
                ${internData.getSchool()}
            </li>
    </div>
</div>
`
}
//
const employeesDiv = employeeData => {
    return `${employeeData.map( employee => {
        switch (employee.getRole()){
            case 'Manager':
                return manager(employee);
            case 'Engineer':
                return engineer(employee);
            case 'Intern':
                return intern(employee);
        }
    })
    .join("")}
    `
}


const template = data => {
    console.log(data)
    return `
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>Employees Page</title>
</head>
<body>
    <div class="container bg-danger text-white flex justify-center">
        <h1 class="flex justify-center align-center">My Team</h1>
    </div>
    <div class="container">
        ${employeesDiv(data)}
    </div>
</body>
</html>    
`
}


module.exports = template