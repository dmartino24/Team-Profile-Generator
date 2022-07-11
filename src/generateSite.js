const generateSite = (teamData) => {
  let employeeCards = [];
  teamData.forEach((employee) => {
    employeeCards.push(generateTeam(employee));
  });
  const joinedEmployeeCards = employeeCards.join("");
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/98af698f58.js"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header class="bg-danger p-4 m-2">
          <h1 class="text-center">My Team</h1>
        </header>
        <main class="container">
        <div class="row justify-content-around my-5 d-flex">
          ${joinedEmployeeCards}
          </div>
          </main>
      </body>
    </html>`;
};
const generateTeam = (employee) => {
  const role = employee.getRole();
  let uniqueInfo;
  let icon;

  if (role === "Manager") {
    uniqueInfo = `<li class="list-group-item">office Number: ${employee.officeNumber}</li>`;
    icon = "fa-solid fa-mug-hot";
  } else if (role === "Engineer") {
    uniqueInfo = `<li class="list-group-item">GitHub: <a target="_blank" href="http://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`;
    icon = "fa-solid fa-glasses";
  } else {
    uniqueInfo = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
    icon = "fa-solid fa-graduation-cap";
  }
  return `
    <div class="col-12 col-md-6 col-lg-4 mb-5">
      <div class="card shadow">
        <div class="card-body bg-primary">
          <h5 class="card-title text-light">${employee.name}</h5>
          <h6 class="card-title text-light">
            <i class="${icon}"></i> ${role}
          </h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">
            Email: <a class="ps-2" target="_blank" href="mailto:${employee.email}">${employee.email}</a>
          </li>
          ${uniqueInfo}
        </ul>
      </div>
    </div>`;
};
module.exports = generateSite;
