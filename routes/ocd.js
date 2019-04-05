const express = require('express');
const router = express.Router();
const rp = require('request-promise')
const { apiCallMaker, googleApiFormatter, apiMakerVtwo, listOcd } = require('../src/utils')
const { GOOGLE_API_KEY } = require('../src/.secrets.js')

router.get('/address:address/city:city/state:state', async function (req, res, next) {
  try {
    const address = req.params.address
    const city = req.params.city
    const state = req.params.state

    const googleParams = googleApiFormatter(address, city, state)
    const data = await rp(`https://www.googleapis.com/civicinfo/v2/representatives?address=${googleParams}&key=${GOOGLE_API_KEY}`)
    const turbovoteQuery = listOcd(Object.keys(JSON.parse(data).divisions))
    const elections = await rp(turbovoteQuery)
    res.json(JSON.parse(elections))


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


