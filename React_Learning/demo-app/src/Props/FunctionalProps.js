import React from 'react'

function FunctionalProps(props) {

    const {Something} =props;
    const {brand, color} = Something
    const text = `This is a ${color} ${brand} car`
  return (
    <h2>{text}</h2>
  )
}

export default FunctionalProps