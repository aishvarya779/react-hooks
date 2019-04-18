import React, { useState, useEffect } from 'react';

const HackerNews = () => {
  // state

  const [news, setNews] = useState([]);

  // fetch news

  const fetchNews = () => {
    fetch('http://hn.algolia.com/api/v1/search?query=react')
      .then(res => res.json())
      .then(res => setNews(res.hits))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchNews();
  });

  return (
    <div>
      <h2>News</h2>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  );
};

export default HackerNews;
