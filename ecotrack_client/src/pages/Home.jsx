
import React, { useState, useEffect } from 'react';

import ecotrackHome from '../assets/ecotrackHome.png';
import { Link } from 'react-router-dom';
import about from '../assets/about.png';
import '../styles/Home.css'

export default function Home() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=environment&apiKey=68bf28b7bdf7402a86fcae7039c4e382&pageSize=3';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='home-container'>
      <div className='dataContainer'>
      <div className='text-section'>
        <h1>Welcome to Ecotrack!</h1>
        <h2>Solving Global Problems</h2>
        <p>EcoTrack is your all-in-one platform designed to make sustainability simple and rewarding. We're here to help you make eco-conscious 
          choices effortlessly while earning rewards for every step towards a greener lifestyle.
          Calculate your carbon footprint, join exciting green challenges, explore local eco-friendly spots, and stay informed with the latest 
          environmental news – all in one place. Join us on this journey towards a more sustainable future, one positive change at a time!"</p>
      </div>
      <div className='image-section'>
        <img src={ecotrackHome} alt="EcoTrack Home" /> 
      </div>
      </div>
      
      <div className='aboutContainer'>
      <div className='bgAboutColour'>
      <div className='about-section'>
        
        <h1>About Us!</h1>
      
        <p>EcoTrack is your all-in-one platform designed to make sustainability simple and rewarding. We're here to help you make eco-conscious 
          choices effortlessly while learning rewards for every step towards a greener lifestyle.
          Calculate your carbon footprint, join exciting green challenges, explore local eco-friendly spots, and stay informed with the latest 
          environmental news – all in one place. Join us on this journey towards a more sustainable future, one positive change at a time!"</p>
          <Link to="/about"> Learn More! </Link>

          
      </div>
      </div>
     
      </div>
      <h1>News!</h1>
      <ul className="news-container" style={{ width: '80%' ,textAlign: "center", margin:"auto"}}>
        {newsData.map((article, index) => (
          <li className="news-item" key={index}>
            <div className="news-image">
              <img src={article.urlToImage} alt="Article Thumbnail" />
            </div>
            <div className="news-title">
              <h3>{article.title}</h3>
            </div>
            <a className="news-link" href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
        <Link to="/api/news" className='newsButton'> Get More News! </Link>
        
      </ul>


    <h1>Enchance Your Knowledge!</h1>
    <div className='VideosConatiner'>
    <div className='Videos'>
      <div className='Videoframe'>
      
         <iframe width="426" height="600" src="https://www.youtube.com/embed/o_hTTOmfh_w" title="What is Carbon Footprint? 🌎 🦶🏿" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <h3>What is Carbon Footprint?</h3>
     </div>
      <div className='Videoframe'>
       
          <iframe width="426" height="600" src="https://www.youtube.com/embed/q2b-qBeotvE" title="What is Carbon footprint 👣?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h3>What is Carbon Footprint?</h3>
        </div>
      <div className='Videoframe'>
     
        <iframe width="426" height="600" src="https://www.youtube.com/embed/REcPMBtBjxk" title="These 5 easy changes can cut your carbon footprint" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>These 5 easy changes can cut your carbon footprint"?</h3>
      </div>

    </div>
    <Link to="/Videos" className='newsButton' > Check All Videos! </Link>

    </div>
    </div>

    
  )
}
