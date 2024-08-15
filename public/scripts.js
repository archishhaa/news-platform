// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    async function fetchArticles() {
      try {
        const response = await fetch('http://localhost:5000/api/articles');
        const articles = await response.json();
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = '';
  
        articles.forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'article';
          articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <small>By ${article.author} on ${new Date(article.date).toLocaleDateString()}</small>
          `;
          articlesContainer.appendChild(articleDiv);
        });
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
  
    fetchArticles();
  });
  