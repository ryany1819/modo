const db = require('../util/postgres.js');

module.exports = {
  createGroup: (req, res, next) => {
    const {
      groupName, groupAvatarUrl,
    } = req.body;

    db.none('INSERT INTO groups("groupName", "groupAvatarUrl") VALUES($1, $2);', [groupName, groupAvatarUrl])
      .then((result) => {
        console.log('​*** result ***', result);
        res.locals.group = groupName;
        next();
      })
      .catch(err => res.status(500).send(err));
  },

  getGroups: (req, res, next) => {
    db.query('SELECT "groupName", "groupId" FROM groups;')
      .then((data) => {
        console.log('List of groups', data);
        res.locals.groups = data;
        next();
      })
      .catch(err => console.log(err));
  },

  getUserGroup: (req, res, next) => {
    const {
      groupId,
    } = req.params;
    console.log('All users', groupId);

    db.any('SELECT users.* FROM users JOIN "userGroups" ON users."userId" = "userGroups"."userId" WHERE "userGroups"."groupId" = $1;', [groupId])
      .then((group) => {
        console.log('Selected group', group);
        res.locals.userGroup = group;
        next();
      })
      .catch(err => console.log(err));
  },

  selectGroup: (req, res, next) => {
    const {
      groupId,
    } = req.body;

    db.one('SELECT * FROM groups WHERE "groupId" = $1;', [groupId])
      .then((data) => {
        res.locals.group = data;
        next();
      })
      .catch(err => console.log(err));
  },

  joinGroup: (req, res, next) => {
    const {
      currentGroup, loggedInUser,
    } = req.body;
    console.log('a', currentGroup, loggedInUser);
    db.one('SELECT "userId" from "users" WHERE email = $1;', [loggedInUser])
      .then((data) => {
        console.log(data);
        db.none('INSERT INTO "userGroups" ("groupId", "userId") VALUES ($1, $2)', [currentGroup, data.userId]);
        next();
      })
      .catch((err) => { console.log(err); res.status(500).send(err); });
  },
};
