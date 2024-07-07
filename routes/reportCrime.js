module.exports = (req, res) => {
    let title = 'How do I Report a Crime';
    res.render('reportCrime', {title});
};