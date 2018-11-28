const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const db = require('../util/postgres.js');

module.exports = {
  /**
  * Create a new user in the data base.
  * @param {object} req - the request object from the server.
  * @param {object} res - the request object from the server.
   */
  createUser: (req, res, next) => {
    const { firstName, lastName, email, password, phoneNum, linkedinUrl, githubUrl, facebookUrl, twitterUrl, instagramUrl, avatarUrl } = req.body;
    const userInputs = [firstName, lastName, email, password, phoneNum, linkedinUrl, githubUrl, facebookUrl, twitterUrl, instagramUrl, avatarUrl];

    const addNewUser = () => {
      db.none(`INSERT INTO users("firstName", "lastName", "email", "password", "phoneNum", "linkedinUrl", "githubUrl", "facebookUrl", "twitterUrl", "instagramUrl", "avatarUrl") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`, userInputs)
        .then((result) => {
          console.log('*** result ***', result);
          res.locals.user = result;
          next();
        })
        .catch(err => res.status(500).send(err));
    };

    bcrypt.genSalt(SALT_WORK_FACTOR)
      .then(salt => bcrypt.hash(password, salt))
      .then((hash) => {
        userInputs[3] = hash;
      })
      .then(() => addNewUser())
      .catch(err => res.status(500).send(err));
  },

  /**
  * Validate if a user and password exists in the database.
  * @param {object} req - the request object from the server.
  * @param {object} res - the request object from the server.
   */
  getUserInfo: (req, res, next) => {

  },

  checkEmailExists: (req, res, next) => {
    const { email } = req.body;
    db.any('SELECT * FROM users WHERE email = $1', [email])
      .then((data) => {
        console.log('*** data ***', data)
        if (data[0]) {
          return res.send({
            msg: 'Email already exists',
            signupSuccess: false,
          });
        }
        // Only returns next if email is not in DB
        return next();
      })
      .catch(err => res.status(500).send(err));
  },
};
