import React from 'react'

const DeleteButton = ( {id, onDelete}) => { 
  return (
    <div>
      <button onClick={() => onDelete(id)}>Radera karaktär</button>
    </div>
  )
}

export default DeleteButton