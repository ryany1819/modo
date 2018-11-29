const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// multer
const multer = require('multer');

const upload = multer({ dest: './upload/' });
const userController = require('./controllers/userController.js');
const groupController = require('./controllers/groupController.js');
const cookieController = require('./controllers/cookieController.js');
const sessionController = require('./controllers/sessionController.js');
const cloudinaryController = require('./controllers/cloudinaryController.js');

// const parser = require('./cloudinary.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

/* ============================================ User ============================================== */

// app.get('/', sessionController.checkSSIDSession, (req, res) => {
//   res.status(200).send(res.locals.data);
// });

app.post('/signup', userController.checkEmailExists, userController.createUser, sessionController.createSession, cookieController.setSSIDCookie, (req, res) => {
  res.status(200).json({
    signupSuccess: true,
    loginSuccess: true,
    msg: 'Signup successful!',
  });
});

app.post('/login', userController.verifyUser, sessionController.createSession, cookieController.setSSIDCookie, (req, res) => {
  res.status(200).json({
    email: res.locals.user.email,
    loginSucess: true,
    msg: 'Login Sucessful!',
  });
});

// app.delete('/logout', cookieController.deleteSSIDCookie, sessionController.deleteSession, (req, res) => {
//   res.status(200).json({
//     logoutSuccess: true,
//   });
// });

app.post('/createGroup', groupController.createGroup, (req, res) => {
  res.status(200).json({
    newGroupSuccess: true,
    msg: 'New group created successful!',
  });
});

app.get('/getGroups', groupController.getGroups, (req, res) => {
  res.status(200).send(res.locals.groups);
});

app.get('/selectGroup', groupController.selectGroup, (req, res) => {
  res.status(200).send(res.locals.group);
});

app.get('/getUserGroup/:groupId', groupController.getUserGroup, (req, res) => {
  res.status(200).send(res.locals.userGroup);
});

app.post('/joinGroup', groupController.joinGroup, (req, res) => {
  res.status(200).json({
    joinGroupSuccess: true,
    msg: 'Joined new group successful!',
  });
});

// app.get('/listing', userController.getListing);
// app.post('/listing', userController.postListing);
// app.get('/filterbyBrand/:brand', userController.filterByBrand);
// app.get('/filterbyCondition/:condition', userController.filterByCondition);
// app.get('/filterbyuser/:uid', userController.filterByUser);
// app.get('/filterbySize/:size', userController.filterBySize);
// // app.post('/images', parser.single('image'), userController.imageParser);
// app.get('/categories/:filter', userController.getCategories);
// test upload file
app.get('/test-upload', (req, res) => {
  res.sendFile(`${__dirname}/test-upload.html`);
});
app.post('/upload', upload.single('upfile'), cloudinaryController.upload, (req, res) => {
  res.send(req.file);
});
// for static contents
app.use(express.static(`${__dirname}/../../dist`));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
});
