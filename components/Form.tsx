import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <form className='flex flex-col max-w-[600px] gap-6'>
        <label htmlFor='fullName'>Full Name</label>
        <input className='input' type='text' name='fullName' placeholder='Your name'/>
        <label htmlFor='email'>Email</label>
        <input className='input' type='text' name='email' placeholder='Your email address'/> 
        <label htmlFor='message'>Message</label>
        <textarea className='input' name='message' placeholder='Type your message....'/>
        <Button title='Submit' variant='orange-fill' type='submit' onClick={()=>{}}/>
    </form>
  )
}

export default Form