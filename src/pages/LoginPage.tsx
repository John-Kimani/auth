import React from 'react'

const LoginPage = () => {
  return (
    <div>

        <form>
            <input type="email" name='email' placeholder='Enter email address' />
            <input type="password" name='password' placeholder='Enter password' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default LoginPage