import React, { useState, useEffect } from 'react';

const HackerNews = () => {
  // state

  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState(
    'http://hn.algolia.com/api/v1/search?query=react'
  );

  const [loading, setLoading] = useState(false);
  // fetch news

  const fetchNews = () => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => (setNews(res.hits), setLoading(false)))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="test"
          placeholder="Search News"
          value={searchQuery}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      {loading ? 'Loading...' : news.map((n, i) => <p key={i}>{n.title}</p>)}
    </div>
  );
};

export default HackerNews;
