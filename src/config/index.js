//This would contain some configuration details
const env = process.env.REACT_APP_ENV;
// environment varibles are varibles that is used by the application itself
//details such as secret keys/enviorment are part of env't variables
//In react, environment varibles start with REACT_APP_

let config = {
    baseURL:"https://localhost"
}

switch (env.toUpperCase()) {
    case "STAGE":
        config.baseURL="https://stage.skillsunion.com"
        break;
    case "PRODUCTION":
        config.baseURL="https://skillsunion.com"
        break;
}

export default config;