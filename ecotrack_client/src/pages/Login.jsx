import {useContext, useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import { AuthContext } from '../../context/AuthContext';
import about from '../assets/register.mp4';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Define isLoading state here

  const loginUser = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when login process starts

    try {
      const { data } = await axios.post('/login', { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        login(); // Call login from AuthContext
        setEmail('');
        setPassword('');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false); // Set isLoading to false when login process ends
    }
  };

  return (
    <div>
     <video id="background-video" autoPlay loop muted >
        <source src={about} type="video/mp4" />
      </video>
      <div className='center-container'>
        <div  className="form-container">
        <h1>Login</h1>
          <form onSubmit={loginUser}>
              <label>Email:</label>
              <input 
                type="email" 
                placeholder='Enter Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <label>Password:</label>
              <input 
                type="password" 
                placeholder='Enter Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <button type='submit' disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}
