import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {

  const highlight = {
    backgroundColor: '#2aa2de',
    color: 'white',
    fontSize: 40,
    marginTop: 50
  }
  return (
    <div className="page page-home">
      <div className='page-logo'></div>
      <div className="page-title">
        <h1>Welcome to  the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p><h4>You will be presented with 10 True or False questions.</h4></p>
        <p style={highlight}>Can you sore 100%?</p>
      </div>
      <div className="page-control">
        <button>
          <Link to="quiz">BEGIN</Link>
        </button>
      </div>
    </div>
  )
}
