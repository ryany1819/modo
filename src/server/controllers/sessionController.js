const db = require('../util/postgres.js');

const uuidv4 = require('uuid/v4');

module.exports = {
  checkSSIDSession: (req, res, next) => {
    res.local.user = {};
    
    if (req,cookies.ssid) {
      db.one('SELECT userId, sessionId FROM sessions WHERE sessionId = $1;', [req.cookies.sessionId])
        .then((session) => {
          console.log('*** Session ***', session);
          if (req,cookies.sessionId === session.sessionId) {
            res.locals.user.id = session.userId;
            console.log('Session exists!');
            res.locals.user.loginSuccess = true;
            console.log('res.locals =>', res.locals);
            next();
          }
        })
        .catch((error) => {
          console.log('ERROR at check ssid session in sessionController.js', error);
          res.status(500).send('SERVER ERROR');
        });
    } else {
      console.log('There is no cookie for the following user');
      res.locals.data.loginSuccess = false;
      res.send(res.locals.data);
      return;
    }
  },

  createSession: (req, res, next) => {
    db.none('DELETE FROM sessions WHERE userId = $1;', [res.locals.user.userId])
      .then(() => {
        res.locals.sessionId = uuidv4();
        return db.none('INSERT INTO sessions(userId, sessionId) VALUES ($1, $2);', [res.locals.user.userId, res.locals.sessionId]);
      })
      .then(() => {
        console.log('*** res.locals ***', res.locals)
        next();
      })
      .catch(() => {
        res.status(500).send();
      })
  },

  deleteSession: (req, res, next) => {
    db.none('DELETE FROM sessions WHERE sessionId = $1;', [req.cookies.sessionId]);
    return next();
  },
};
