import React from 'react'

const GeneratePokemon = (props) => {
  return (
   <button className='search-btn' onClick={props.onClick}>Catch Pokemon</button>
  )
}

export default GeneratePokemon