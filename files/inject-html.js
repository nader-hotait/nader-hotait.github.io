window.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('rmarkdown-content');
  var htmlFileURL = '2022-04-13-blog-post-1.html';

  fetch(htmlFileURL)
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      container.innerHTML = html;
    })
    .catch(function(error) {
      console.error('Error fetching HTML file:', error);
    });
});
