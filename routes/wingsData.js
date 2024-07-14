const {orgUnits} = require('../orgUnit');
module.exports = async (req, res) => {
    let title = 'Wings';
    console.log('req.query.wing', req.query.wing);
    let data = [];
    for(let i=0; i<orgUnits.length; i++) {
        if(orgUnits[i].wing == req.query.wing) {
            data.push(orgUnits[i]);
        }
    }
    res.render('wings', { title, data });
};
