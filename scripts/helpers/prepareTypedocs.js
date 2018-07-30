let fs = require("fs");

let prepareTypedoc = (files, done) => {
    
    let contents = files.map(filename=> {
        let content = fs.readFileSync(filename);
        return processDeclaration(content.toString());
    });

    try {
        fs.mkdirSync('./.tmp/');
    } catch(e) {}

    fs.writeFileSync('./.tmp/babylon.d.ts', contents.join("\n"));
    done();
}

function processDeclaration(content) {
    let inStringModule = false;
    let filtered = content.split("\n").filter(line => {
        let filtered = inStringModule;
        if(inStringModule) {
            // end of string-module?
            if(line.indexOf("}") === 0){
                inStringModule = false;
            }
        }
        if(line.indexOf("declare module '")=== 0 || line.indexOf('declare module "') === 0){
            let trimmed = line.trim();
            if(trimmed.split().pop() === '}') {
                // single line, NOOP
            } else {
                inStringModule = true;
            }
            filtered = true;
        }

        return !filtered;
    });

    return filtered.join("\n");
}

module.exports = prepareTypedoc;