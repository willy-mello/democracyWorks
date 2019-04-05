



//initializing googleapi


const requestMaker = (state) => {

  return `/country:${state.country}/state:${state.state}/place:${underscoreAdder(state.city).toLowerCase()}`
}
const googleRequestMaker = (state) => {

  return `/address:${underscoreAdder(state.street1)}/city:${underscoreAdder(state.city)}/state:${state.state}`
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

const listOcd = (arr) => {
  const reqUrl = 'https://api.turbovote.org/elections/upcoming?district-divisions='
  const ocdIdList = arr.join(',')

  const reqObj = {
    uri: reqUrl + ocdIdList,
    headers: { Accept: 'application/json' }
  }
  return reqObj
}

const underscoreAdder = (str) => {
  let newString = str.split('').map((elem) => {
    if (elem === ' ') {
      return '_'
    }
    return elem
  })
  console.log('newStirng', newString.join(''))
  return newString.join('')
}
const urlSpaceFormatter = (str) => {
  let newString = str.split('').map((elem) => {
    if (elem === '_') {
      return '%20'
    }
    return elem
  })
  console.log('newStirng', newString.join(''))
  return newString.join('')
}

const apiMakerVtwo = (state) => {
  const address = `${urlSpaceFormatter(state.street1)}%2C${state.street2}%2C${urlSpaceFormatter(state.city)}%2C${state.state}`
  console.log('address in API maker v2', address)

  // Make sure the client is loaded before calling this method.

  return address
}

const googleApiFormatter = (address, city, state) => {
  const formatted = `${urlSpaceFormatter(address)}%2C${urlSpaceFormatter(city)}%2C${state}`
  console.log('googleapiformatter', address)

  // Make sure the client is loaded before calling this method.

  return formatted
}
//google api https://www.googleapis.com/civicinfo/v2/representatives?address=518%20Gregory%20Ave%2C%20Weehawken%2C%20NJ%2007086&key=[YOUR_API_KEY]

module.exports = { requestMaker, apiCallMaker, listOcd, apiMakerVtwo, googleRequestMaker, googleApiFormatter }