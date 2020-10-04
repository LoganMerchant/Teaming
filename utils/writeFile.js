const fs = require('fs');

module.exports = writeFile = fileContent => {
    fs.writeFile('./dis/index.html', fileContent, err => {
        if (err) {
            throw new Error(err);
        };
    });
};
