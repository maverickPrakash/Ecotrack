import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; //navigate to another page
import '../styles/Register.css'; 
import about from '../assets/register.mp4';


export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault()
        const {firstName, lastName, email, password} = data
        try {
         const {data} = await axios.post('/register', {
            firstName, lastName, email, password
         })
         if(data.error) {
            toast.error(data.error)
         } else {
            setData({})
            toast.success('Thank you for registering to Eco Track! Welcome!')
            navigate('/login') //after successful registering send them to login page
         }
        } catch(error){
            console.log(error)
        }
    }
  return (
    <div>
        <div className="">
        <video id="background-video" autoPlay loop muted >
        <source src={about} type="video/mp4" />
      </video>
      
        <div className="center-container">
            <div className="form-container">
            <h1>Register</h1>
                <form onSubmit={registerUser}>
                    {/* first name, last name, email, password */}
                    <label>First Name:</label>
                    <input type="text" placeholder='i.e John' value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value})}/>
                    <label>Last Name:</label>
                    <input type="text" placeholder='i.e Smith' value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value})}/>
                    <label>Email:</label>
                    <input type="email" placeholder='i.e JohnSmith@gmail.com' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                    <label>Password:</label>
                    <input type="password" placeholder='Enter Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
