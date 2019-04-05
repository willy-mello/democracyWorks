import React from 'react'

// an array of elections is returned from the API call to country:id/state:id/place:id
// each index being a unique election for that place
// each unique election is an object


const ElectionInfo = (props) => {
  const data = props.data

  return (

    <div>
      <p>rendering election INfo</p>
      <p>{data['polling-place-url']}</p>
      //description
      <p>{data['description']}</p>
      //date
      <p>{data['date']}</p>
    </div>


  )
}

export default ElectionInfo