import React, { useState, useEffect } from 'react';
import '../styles/NewsFeed.css'; 

export default function NewsFeed() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=environment&apiKey=68bf28b7bdf7402a86fcae7039c4e382';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.error(error));
  }, []);
  const filteredNewsData = newsData.filter(article => article.urlToImage !== null && article.urlToImage !== ""  );

  return (
    <div style={{width:"80%", margin:"2% auto", textAlign:"center"}}>
      <h1>Environmental News Feed</h1>
      <h2>Keep Yourself Informed on Eco News!</h2>
      <ul className="news-container">
        {filteredNewsData.map((article, index) => (
          console.log(article),
       
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
      </ul>
    </div>
  );
}
