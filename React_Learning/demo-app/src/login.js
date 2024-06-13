import React from 'react'

const Login =()=> {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const email=emailRef.current.value
        const password = passwordRef.current.value

        alert(email + ' ' + password)
    }

  return (
      <form onSubmit={handleSubmit}>
        <div>login
            <label htmlFor='email'>Enter email</label>
            <input id='email' type='text' ref={emailRef}></input>
        </div>
        <div>password
            <label htmlFor='password'>Enter password</label>
            <input id='password' type='password' ref={passwordRef}></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export {Login}