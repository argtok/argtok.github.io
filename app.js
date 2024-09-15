document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  // List of your image file names stored in the "images" folder
  const imageFiles = [
    "albania_beach.jpg",         // For beach in Tourism section
    "albanian_alps.jpg",         // For Albanian Alps in Tourism section
    "tirana.jpg",                // For Tirana city in Cities to Visit
    "shkodra.jpg",               // For Shkodër city in Cities to Visit
    "korce.jpg",                 // For Korçë city in Cities to Visit
    "durres_marina.jpg",         // For Durres Marina in Future section
    "vlora_marina.jpg"           // For Vlora Marina in Future section
  ];

  // Loop through each <img> element on the page and assign an image from the array
  let i = 0;
  for (const image of images) {
    if (imageFiles[i]) {
      image.src = `images/${imageFiles[i]}`;  // Set the image source
      i++;
    }
  }
});
