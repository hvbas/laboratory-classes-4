const { MENU_LINKS } = require('../constants/navigation');

const getLogoutView = (req, res) => {
  res.render('logout.ejs', {
    headTitle: 'Shop - Logout',
    path: '/logout',
    menuLinks: MENU_LINKS,
    activeLinkPath: '/logout'
  });
};

const killApplication = (req, res) => {
  process.exit();
};

module.exports = {
  getLogoutView,
  killApplication
};
