const { orgUnits } = require('../orgUnit');

module.exports = async (req, res) => {
    let title = 'Police Station Data';
    console.log('req.query.pslocation', req.query.pslocation);

    let data = orgUnits.find(unit => unit.pslocation === req.query.pslocation);
    console.log('data', data);

    if (!data) {
        return res.status(404).send('Police station not found');
    }

    res.render('policeData', { title, data });
};