import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <>
      <div className="loading-page-container">
        <div className="loading-box">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
