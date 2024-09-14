document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  // List of your image file names stored in the "images" folder
  const imageFiles = [
    "pvc_pur_1.jpg",
    "pvc_pur_2.jpg",
    "pvc_pur_3.jpg",
    "gearless1.jpg",
    "gearless2.jpg"
  ];

  // Loop through each <img> element on the page and assign an image from the array
  let i = 0;
  for (const image of images) {
    if (imageFiles[i]) {
      image.src = images/${imageFiles[i]};  // Set the image source
      i++;
    }
  }
});