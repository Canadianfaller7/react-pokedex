import React from 'react'

const GeneratePokemon = (props) => {
  return (
   <button className='search-btn' onClick={props.onClick}>Wild Pokemon</button>
  )
}

export default GeneratePokemon