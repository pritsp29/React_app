import React from 'react'

const home = () => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
            <p>Please select an option:</p>
            <ul>
              <li><a href="/form">Go to Form</a></li>
              <li><a href="/table">Go to Table</a></li>
            </ul>
    </div>
  )
}

export default home
