import React from 'react'

function Loading() {
  return (
    <div className="spinner-border " role="status" style={{padding:"3%", marginLeft:"45%"}}>
        <span className="visually-hidden ">Loading...</span>
      </div>
  )
}

export default Loading