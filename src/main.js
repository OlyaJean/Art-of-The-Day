import './style.css'

const img = document.getElementById('image');
const artTitle = document.getElementById('artTitle');
const artistName = document.getElementById('artistName');
const artDescription = document.getElementById('artDescription');

//Return only 50 artworks 
const artApiUrl = 'https://api.artic.edu/api/v1/artworks?limit=50'

fetch(artApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(artData => {
   let allArt = artData.data;
   let randomArtIndex = Math.floor(Math.random() * (allArt.length - 1));
   let artForDisplay = allArt[randomArtIndex]
   //get title
   artTitle.textContent = artForDisplay.title;

   //get artist name
   artistName.textContent = artForDisplay.artist_title;

   //get art description
   if(!artForDisplay.description){
    artDescription.textContent = 'Description is not available.'
   }else{
    artDescription.textContent = artForDisplay.description
   }
   //get image
   let imgSrc = `https://www.artic.edu/iiif/2/${artForDisplay.image_id}/full/843,/0/default.jpg`;
   img.src = imgSrc;
    console.log('Art Data:', artForDisplay);
    console.log(imgSrc);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  