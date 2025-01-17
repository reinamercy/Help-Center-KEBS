const articles = [
  { title: "How do I create and add a new Total job: Understanding the Key Difference", author: "Jim Halpert", date: "July 01, 2024", image: "images/article.png" },
  { title: "5 Tips for Effective Team Collaboration", author: "Pam Beesly", date: "July 02, 2024", image: "images/article.png" },
  { title: "Streamlining Project Management with Agile", author: "Dwight Schrute", date: "July 03, 2024", image: "images/article.png" },
  { title: "Enhancing Productivity Through Automation", author: "Michael Scott", date: "July 04, 2024", image: "images/article.png" },
  { title: "The Basics of Financial Forecasting", author: "Oscar Martinez", date: "July 05, 2024", image: "images/article.png" },
  { title: "Building a User-Friendly CRM", author: "Ryan Howard", date: "July 06, 2024", image: "images/article.png" },
  { title: "Effective ATS Strategies for Hiring", author: "Toby Flenderson", date: "July 07, 2024", image: "images/article.png" },
  { title: "Exploring the Latest in HR Trends", author: "Angela Martin", date: "July 08, 2024", image: "images/article.png" },
  { title: "Timesheets: Best Practices for Accuracy", author: "Kevin Malone", date: "July 09, 2024", image: "images/article.png" },
  { title: "Understanding Cloud Security Basics", author: "Stanley Hudson", date: "July 10, 2024", image: "images/article.png" },
  { title: "Boosting Team Morale with Recognition", author: "Andy Bernard", date: "July 11, 2024", image: "images/article.png" }
];

  const articlesPerPage = 9;
  let currentPage = 1;

  function renderArticles() {
    const articleGrid = document.querySelector(".article-grid");
    articleGrid.innerHTML = ""; // Clear current articles

    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToDisplay = articles.slice(startIndex, endIndex);

    articlesToDisplay.forEach(article => {
      const articleCard = document.createElement("div");
      articleCard.className = "article-card";
      articleCard.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article">
        <div class="article-content">
          <h4>${article.title}</h4>
          <p>${article.content}</p>
        </div>
      `;
      articleGrid.appendChild(articleCard);
    });
  }

  function renderPagination() {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = ""; // Clear current pagination

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const prevButton = document.createElement("button");
prevButton.textContent = "❮";
prevButton.disabled = currentPage === 1; // Disable if on the first page
prevButton.onclick = () => {
  currentPage--;
  renderArticles(); // Refresh displayed articles
  renderPagination(); // Refresh pagination controls
};

// Current Page Indicator
const currentPageText = document.createElement("span");
currentPageText.textContent = `${currentPage}`;

// Next Button
const nextButton = document.createElement("button");
nextButton.textContent = "❯";
nextButton.disabled = currentPage === totalPages; // Disable if on the last page
nextButton.onclick = () => {
  currentPage++;
  renderArticles(); // Refresh displayed articles
  renderPagination(); // Refresh pagination controls
};

    pagination.appendChild(prevButton);
    pagination.appendChild(currentPageText);
    pagination.appendChild(nextButton);
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderArticles();
    renderPagination();
  });