import React from 'react';

const Article = ({ article, onThumbsUp }) => {
  return (
    <div className="article">
      <img src={article.download_url} alt={article.author} />
      <span className="author">Author: {article.author} </span>
      <span className="thumbs-up">
        <img
          src={require('./assets/thumbs-up-icon-31143.png')}
          alt="Thumbs Up"
          className="thumbs-up-icon"
        />
      </span>
    </div>
  );
};

export default Article;