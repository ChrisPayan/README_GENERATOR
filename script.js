const inquirer = require("inquirer");
const fs = require("fs");
inquirer
	.prompt([
		{
			type: "input",
			message: "What is your project Title?",
			name: "projectName",
		},
		{
			type: "input",
			message: "What is the description of project?",
			name: "projectDescription",
		},
		{
			type: "input",
			message: "What are the installation instructions?",
			name: "projectInstructions",
		},
		{
			type: "input",
			message: "What are the usage instructions?",
			name: "projectUsage",
		},
		{
			type: "input",
			message: "Are there any contribution guidelines?",
			name: "projectContribution",
		},
		{
			type: "input",
			message: "What are the test Instructions?",
			name: "projectTest",
		},
		{
			type: "input",
			message: "Would you like to credit someone?",
			name: "credit",
		},
		{
			type: "list",
			message: "What licenses did you use?",
			name: "licenses",
			choices:["MIT", "GPL", "N/A"]
		},
		{
			type: "input",
			message: "What is your github Username?",
			name: "userGitHub",
		},
		{
			type: "input",
			message: "What is your email?",
			name: "email",
		},
	])
	.then((answers) => {
		//array
		if(answers.licenses === "MIT") {
			answers.licenses = mitLicense;
		} else if (answers.licenses === "GPL") {
			answers.licenses = mitLicense;
		} else {

		}
		const listOfContributers = answers.credit.split(" ");
		console.log(listOfContributers);
		const md = `
# ${answers.projectName}
## Description
${answers.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${answers.projectInstructions}
## Usage
${answers.projectUsage}

    screenshot

## Credits

- [${listOfContributers[0]}](https://github.com/${listOfContributers[0]})

## License
* [${licenses}](#${licenses})

## Contact
* GitHub :[](https://github.com/${userGitHub})
* LinkedIn :()
* E-mail :[${email}](${email})
`;

		fs.writeFile(`README.md`, md, (err) =>
			err ? console.error(err) : console.log("Success!")
		);
	});

var mitLicense = `MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

var ape