document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  // List of your image file names stored in the "images" folder
  const imageFiles = [
    "albania_flag.jpg",          // For the Albanian flag in the summary section
    "albania_beach.jpg",         // For the beach in the Tourism section
    "albanian_alps.jpg",         // For the Albanian Alps in the Tourism section
    "tirana.jpg",                // For Tirana city in Cities to Visit
    "shkodra.jpg",               // For Shkodër city in Cities to Visit
    "korce.jpg",                 // For Korçë city in Cities to Visit
    "durres_marina.jpg",         // For Durres Marina in the Future section
    "vlora_marina.jpg"           // For Vlora Marina in the Future section
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
