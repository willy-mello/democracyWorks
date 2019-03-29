const express = require('express');
const router = express.Router();
const rp = require('request-promise')
const { apiCallMaker } = require('../src/utils')




router.get('/country:country/state:state/place:place', async function (req, res, next) {
  try {
    let state = req.params.state
    let country = req.params.country
    let place = req.params.place
    console.log(apiCallMaker(country, state, place), 'apicall')
    const data = await rp(apiCallMaker(country, state, place))
    res.json(JSON.parse(data))

  } catch (error) {
    next(error)
  }

})

router.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(500);
  // res.render('error');
});
module.exports = router
