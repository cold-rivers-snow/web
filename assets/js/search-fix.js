// Custom search fix for Hextra theme
document.addEventListener('DOMContentLoaded', function() {
  // Fix search result URLs
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        const searchResults = document.querySelector('.hextra-search-results');
        if (searchResults) {
          const links = searchResults.querySelectorAll('a[href]');
          links.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href && href.endsWith('/') && !href.includes('#')) {
              // Add click event listener to handle navigation
              link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetUrl = href + 'index.html';
                window.location.href = targetUrl;
              });
            }
          });
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});