//get all employers
let employers = await API.graphql(graphqlOperation(queries.listEmployers));

//create a company (address should create seperate and use the ID inside create employer)
const employerdata = {
    id: "102",
    companyName: "alibabartrt",
    companyEmail: "lanjie34569@gmail.com",
    companyPhone: "5435345",
    companyWebsite: "qqq.com",
    employerCompanyAddressId:"100"
  }
let employer = await API.graphql(graphqlOperation(mutations.createEmployer, {input: employerdata}));

//get employer by id
let employer = await API.graphql(graphqlOperation(queries.getEmployer,{id:"100"}));

//update employer 
API.graphql(graphqlOperation(mutations.updateEmployer,{input:employerdata}));

  