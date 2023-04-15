import React from 'react';

const Poke = ({name, image}) => {
  return (
    <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />

    </div>
  )
}

export default Poke