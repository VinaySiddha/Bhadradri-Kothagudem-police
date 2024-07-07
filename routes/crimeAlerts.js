module.exports = (req, res) => {
    let title = 'Crime Alerts';
    res.render('crimeAlerts', {title});
};