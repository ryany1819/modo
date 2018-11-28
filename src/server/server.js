const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController.js');
// const groupController = require('./controllers/groupController.js');
// const sessionController = require('./controllers/sessionController.js');
// const parser = require('./cloudinary.js');

const db = require('./util/postgres.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/signup', userController.checkEmailExists, userController.createUser);
app.post('/login', userController.getUserInfo);
// app.get('/listing', userController.getListing);
// app.post('/listing', userController.postListing);
// app.get('/filterbyBrand/:brand', userController.filterByBrand);
// app.get('/filterbyCondition/:condition', userController.filterByCondition);
// app.get('/filterbyuser/:uid', userController.filterByUser);
// app.get('/filterbySize/:size', userController.filterBySize);
// // app.post('/images', parser.single('image'), userController.imageParser);
// app.get('/categories/:filter', userController.getCategories);
// app.use(express.static(`${__dirname}/../../dist`));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
});
