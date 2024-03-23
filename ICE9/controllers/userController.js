exports.homeView = (req, res) => {
    res.render('home', { title: 'Home Page' });
};

exports.aboutView = (req, res) => {
    res.render('about', { title: 'About Page' });
};