const express = require("express");
const port = 8000;
const app = express();
const faker = require('faker')

class User{
  constructor(){
    this.id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.internet = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company{
  constructor(){
    this.id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.address = {
      'street': faker.address.streetName(),
      'city': faker.address.city(),
      'state': faker.address.state(),
      'zipCode': faker.address.zipCode(),
      'country': faker.address.country()
    }
  }
}

// const u1 = new User();
// const u2 = new User();

app.get("/api/user/new", (req, res) => {
  res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json(new User(),new Company());
});

// req is short for request
// res is short for response
// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
// });

app.listen( port, () => console.log(`Listening on port: ${port}`) )
