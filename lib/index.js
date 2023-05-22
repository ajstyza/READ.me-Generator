// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ###  ${renderLicense(data.license )}
`;
}

module.exports = generateMarkdown;

const template = `
# ${data.name}
## ${data.project}
### 
${response.contents}
###
${response.install}
####
${response.purpose}
#####
${data.contributors}
######
${data.instructions}
#######
${data.license}`
