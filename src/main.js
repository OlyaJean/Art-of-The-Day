import './style.css'

const img = document.getElementById('image');


fetch('https://api.artic.edu/api/v1/artworks')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));