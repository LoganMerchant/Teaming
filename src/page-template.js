const generateEngineers = engineerArr => {
    if (!engineerArr) {
        return '';
    };

    return `
        ${engineerArr
            .map(({ name, employeeId, email, github }) => {
                return `
                <div class="card bg-secondary col-12 col-md-6 col-lg-3">
                    <div class="card-body">
                        <h5 class="card-subtitle p-3 bg-primary">${name}</h5>
                        <h6 class="card-subtitle p-3 bg-primary">Engineer</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${employeeId}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                        </ul>
                    </div>
                </div>
                `;
            })
        }
    `;
};

const generateInterns = internArr => {
    if (!internArr) {
        return '';
    };

    return `
        ${internArr
            .map(({ name, employeeId, email, school }) => {
                return `
                <div class="card bg-secondary col-12 col-md-6 col-lg-3">
                    <div class="card-body">
                        <h5 class="card-subtitle p-3 bg-primary">${name}</h5>
                        <h6 class="card-subtitle p-3 bg-primary">Intern</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${employeeId}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
                `;
            })
        }
    `;
};

const generateTeam = (managerArr, engineerArr, internArr) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Your Team | Built with Teaming</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        crossorigin="anonymous">    
    </head>
    <body>

        <header class="bg-success">
            <h1 class="display-3 py-3 text-center">My Wonderful Team</h1>
        </header>

        <main>
            <section id="managers" class="row p-1">
                ${managerArr
                    .map(({ name, employeeId, email, officeNumber }) => {
                        return `
                        <div class="card bg-secondary col-12 col-md-6 col-lg-3">
                            <div class="card-body">
                                <h5 class="card-subtitle p-3 bg-primary">${name}</h5>
                                <h6 class="card-subtitle p-3 bg-primary">Manager</h6>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Employee ID: ${employeeId}</li>
                                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                    <li class="list-group-item">Office Number: ${officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                        `;
                    })
                }
            </section>

            <section id="engineers" class="row p-1">
                ${generateEngineers(engineerArr)}
            </section>

            <section id="managers" class="row p-1">
                ${generateInterns(internArr)}
            </section>

        </main>
        
    </body>
    </html> 
    `
};

module.exports = generateTeam;