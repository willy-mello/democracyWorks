const requestMaker = (state) => {

  return `/country:${state.country}/state:${state.state}/place:${state.city.toLowerCase()}`
}

const apiCallMaker = (country, state, place) => {
  const reqUrl = 'https://api.turbovote.org/elections/upcoming?district-divisions='
  const ocdIdState = `ocd-division/country${country}/state${state}`
  const ocdIdPlace = `,ocd-division/country${country}/state${state}/place${place.toLowerCase()}`
  const reqObj = {
    uri: reqUrl + ocdIdState + ocdIdPlace,
    headers: { Accept: 'application/json' }
  }

  return reqObj
}

module.exports = { requestMaker, apiCallMaker }