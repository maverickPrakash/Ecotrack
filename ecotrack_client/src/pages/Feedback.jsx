import React ,{ useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Feedback.css'


export default function Feedback() {

    const [formData, setFormData] = useState({
        to_name: 'Recipient Name',
        from_name: '',
        from_email: '',
        message: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_4s8vqih', 'template_y87z41u', formData, 'kzlEwhAr1s-FpDO_K')
          .then((result) => {
            toast.success('Message sent successfully');
          }, (error) => {
            toast.error('There was an issue sending the message. Please try again later.');
          });
        
        setFormData({
          to_name: 'Prakash Kumar',
          from_name: '',
          from_email: '',
          message: ''
        });
      };
  return (
    <div id="feedback"><h1>Feedback</h1>
    <form onSubmit={handleSubmit}>
      <ToastContainer
        style={{
          width: '100%',
       }}
        autoClose={7000} 
        draggable 
        pauseOnHover 
      />

        <div>
          <label htmlFor="from_name">Your Name:</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder='Name'
          />
        </div>
        <div>
          <label htmlFor="from_email">Your Email:</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required 
            placeholder='Email'
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Message'
            rows="10"
          />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}
