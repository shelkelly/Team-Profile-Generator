const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { doesNotMatch } = require("assert");

let team = [];

inquirerManager();

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Engineer", "Intern", "Done"],
            name: "addMoreMembers"
        }
    ])
    .then(function(result) {
        switch (result.addMoreMembers) {
            case "Engineer":
                inquirerEngineer();
                break;
            case "Intern":
                inquirerIntern();
                break;
            case "Done":
                renderTeam();
                break;
        }
    })
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function inquirerManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your team manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your team manager's office number?"
        }
    ]).then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const person = new Manager(name, id, email, officeNumber)
        team.push(person)
        console.log(team)
        addTeamMembers();
    })
}

function inquirerEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = team.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            team.push(teamMember)
            console.log(team)
            addTeamMembers()
        });

};

function inquirerIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = team.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            team.push(teamMember)
            console.log(team)
            addTeamMembers()
        });

};

function renderTeam() {
    const html = [];
    const htmlStart = `
    `
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
