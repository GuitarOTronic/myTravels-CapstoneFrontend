import React from 'react'

const FellowEntries =({ entry }) => {
  console.log('entry>>>>> ', entry);

  return (
    <div>
      {entry.title}

    </div>
  )

}

export default FellowEntries
