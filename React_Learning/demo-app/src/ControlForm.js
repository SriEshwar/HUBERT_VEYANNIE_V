import React from 'react'

const ControlForm=()=> {

    const [form, setForm]=React.useState({
        email:'',
        password:''
    });

    const handleChange=(event)=>{
        setForm({
            ...form, 
            [event.target.id]: event.target.value,
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(form.email + ' ' + form.password)
    }

  return (
    <div>ControlForm
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input id='email' type='text' value={form.email} onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' value={form.password} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export {ControlForm};