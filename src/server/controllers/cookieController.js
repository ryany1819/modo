module.exports = {
  setSSIDCookie: (req, res, next) => {
    res.cookie('SSID', res.locals.ssid, { httpOnly: true });
    next();
  },

  deleteCookie: (req, res, next) => {
    res.clearCookie('SSID');
    return next();
  },
};
