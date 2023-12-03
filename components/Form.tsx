'use client'
import React , {useState} from 'react'
import Button from './Button'
type Client ={
  fullName: string;
  email: string;
  message: string;
}
const Form = () => {
  const [values, setValues] = useState<Client>({
    fullName: '',
    email: '',
    message: '',
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values)
  }
  return (
    <form className='flex flex-col max-w-[600px] gap-6'  onSubmit={handleSubmit}>
        <label htmlFor='fullName'>Full Name</label>
        <input className='input' type='text' name='fullName' placeholder='Your name' onChange={handleChange}/>
        <label htmlFor='email'>Email</label>
        <input className='input' type='text' name='email' placeholder='Your email address' onChange={handleChange}/> 
        <label htmlFor='message'>Message</label>
        <textarea className='input' name='message' placeholder='Type your message....' onChange={handleChange}/>
        <Button title='Submit' variant='orange-fill' type='submit'/>
    </form>
  )
}

export default Form