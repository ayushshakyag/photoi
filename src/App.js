import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Article from "./Article";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchArticles = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${currentPage}`
      );
      const newArticles = response.data.filter((newArticle) => {
        return !articles.some(
          (existingArticle) =>
            existingArticle.download_url === newArticle.download_url
        );
      });
      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }, [currentPage, articles]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchArticles();
    }
  }, [fetchArticles]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  return (
    <div className="app">
      <h1 className="heading"> Photo Gallery</h1>
      <div className="app-container">
        <div className="articles-list">
          {articles.map((article) => (
            <Article key={generateUniqueId()} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
