const db = require('../util/postgres.js');

module.exports = {
  createGroup: (req, res, next) => {
    const {
      groupName, groupAvatarUrl,
    } = req.body;

    db.none(`INSERT INTO groups("groupName", "groupAvatarUrl") VALUES($1, $2);`, [groupName, groupAvatarUrl])
      .then((result) => {
        console.log('​*** result ***', result);
        res.locals.group = groupName;
        next();
      })
      .catch(err => res.status(500).send(err));
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
      groupId, userId,
    } = req.body;

    db.none(`INSERT INTO "userGroups"("groupId", "userId") VALUES($1, $2);`, [groupId, userId])
      .then(() => {
        next();
      })
      .catch(err => res.status(500).send(err));
  },
};
