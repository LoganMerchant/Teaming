const generateEngineers = engineerArr => {
    if (!engineerArr) {
        return '';
    };

    return `
        ${engineerArr
            .map(({ name, employeeId, email, github }) => {
                return `
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card bg-light m-2 border-left-0 border-top-0 border-secondary">
                        <div class="card-header bg-primary">
                            <h3 class="card-title text-white">${name}</h3>
                            <h5 class="card-subtitle text-white"><i class="fas fa-glasses pr-2"></i>Engineer</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Employee ID: ${employeeId}</li>
                                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `;
            })
        .join('')}
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
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card bg-light m-2 border-left-0 border-top-0 border-secondary">
                        <div class="card-header bg-primary">
                            <h3 class="card-title text-white">${name}</h3>
                            <h5 class="card-subtitle text-white"><i class="fas fa-graduation-cap pr-2"></i>Intern</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Employee ID: ${employeeId}</li>
                                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `;
            })
        .join('')}
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
        <title>Your Team | Teaming</title>
        <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        crossorigin="anonymous"> 
        <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" 
        integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" 
        crossorigin="anonymous"/>   
    </head>
    <body>

        <header class="bg-primary">
            <h1 class="display-4 py-3 text-center text-white">Your Expert Team</h1>
        </header>

        <main class="container">
            <section id="employees" class="row justify-content-center">
                ${managerArr
                    .map(({ name, employeeId, email, officeNumber }) => {
                        return `
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card bg-light m-2 border-left-0 border-top-0 border-secondary">
                                <div class="card-header bg-primary">
                                    <h3 class="card-title text-white">${name}</h3>
                                    <h5 class="card-subtitle text-white"><i class="fas fa-coffee pr-2"></i>Manager</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Employee ID: ${employeeId}</li>
                                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
                    })
                }
                ${generateEngineers(engineerArr)}
                ${generateInterns(internArr)}

            </section>
        </main>
        
    </body>
    </html> 
    `
};

module.exports = generateTeam;