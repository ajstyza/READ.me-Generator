const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('./lib');


/*
fs.readFile('maths.js', 'utf-8', (error) =>
error ? console.error(error) : console.log(math.nameQ)
);
*/
// TODO: Create a function to write README file

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
async function startPrompt() {
    // try {
        // const prompt = await 
        inquirer
             .prompt([
                 {
                     type: 'input',
                     name: 'name',
                     message: 'What is your name?'
                 },
                 {
                     type: 'input',
                     name: 'project',
                     message: 'What is the name of your project?'
                 },
                 {
                     type: 'input',
                     name: 'contents',
                     message: 'Provide a table of contents if your project requires.'
                 },
                 {
                     type: 'input',
                     name: 'install',
                     message: 'How do you install your project?'
                 },
                 {
                     type: 'input',
                     name: 'purpose',
                     message: 'Describe the purpose of your project.'
                 },
                 {
                     type: 'input',
                     name: 'contributors',
                     message: 'List project contributors and their github links.'
                 },
                 {
                     type: 'input',
                     name: 'instructions',
                     message: 'Provide test instructions about your project.'
                 },
                {   
                    type: 'input',
                    name: 'license',
                    message: 'list repository licenses, e.g., MIT'
                 }
             ])
        
    // } catch (err) {
     

    //     console.log(err)
    //     throw err
    // }     

    .then((response) => {
            const readMeFile = 
                `## ${response.project.split('').join('')}.md
                ### 
                ${response.contents}
                ##
                ${response.install}
                ####
                ${response.purpose}
                #####
                ${response.contributors}
                ######
                ${response.instructions}
                #######
                ${response.license}`;
                     fs.writeFile(readMeFile, JSON.stringify(response, null, '\t'), (log) =>

                            console.log(readMeFile))
                            
        
        })
        .catch((err) => console.log(err));

    }

// function init() {
    
//     return startPrompt()
//         .then((result) => {
//             console.log(result)
//             generateReadMe(result)
//         })
// }

// // init()
startPrompt();
//generateMarkdown(response)