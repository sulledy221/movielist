import React from 'react';

export default function Movie ({ name, location }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{location}</p>
    </div>
  )
}