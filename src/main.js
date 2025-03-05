import './style.css'

const img = document.getElementById('image');

const artApiUrl = 'https://api.artic.edu/api/v1/artworks?limit=50'
// Make a GET request using the Fetch API
fetch(artApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(artData => {
   let allArt = artData.data;
   let randomArtIndex = Math.floor(Math.random() * (allArt.length - 1))

    console.log('Art Data:', allArt[randomArtIndex]);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  