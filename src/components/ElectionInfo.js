import React from 'react'

// an array of elections is returned from the API call to country:id/state:id/place:id
// each index being a unique election for that place
// each unique election is an object


const ElectionInfo = (props) => {
  const data = props.data

  return (

    <div>
      <p>rendering election INfo</p>
      <p>{data[0]['polling-place-url']}</p>
    </div>


  )
}

export default ElectionInfo