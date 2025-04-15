const { MENU_LINKS } = require('../constants/navigation');

const getHomeView = (req, res) => {
  res.render('home.ejs', {
    headTitle: 'Shop - Home',
    path: '/',
    menuLinks: MENU_LINKS,
    activeLinkPath: '/'
  });
};

module.exports = {
  getHomeView
};
