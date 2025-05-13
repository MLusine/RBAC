import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='form-wrapper'>
        <form className='form'>
        <div className="form-field">
          <label for="email">Email:</label>
          <input type="email" id="email" className="form-input" />
        </div>

        <button className='button'>Send Reset Link</button>
        </form>
    </div>
  )
}

export default ForgotPassword