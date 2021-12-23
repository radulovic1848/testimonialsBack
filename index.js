const express = require("express");
var cors = require('cors')
const sequelize = require ('./database');
const bodyParser = require("body-parser");
const router = require('./routes/testimonialsRoutes');
const Testemonial = require('./models/Testimonial');
const usersForTheDatabase = require('./assets/mocks/testemonialsMock')

const addTestimonials = async (users) => {
  await users.module.forEach((user) => {
    Testemonial.create({name: user.name, age: user.age, location: user.location, comments: user.comments, image: user.image, video: user.video})
  });
}

//Creating database
sequelize.sync({force: true}).then(async() => { await addTestimonials(usersForTheDatabase) });

const app = express();
app.use(express.static('uploads'));
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(3001, () => {
  console.log("app is running");
});

