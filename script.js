function upDate(previewPic) {
  // Log the event and the previewPic object to verify the function is triggered
  console.log("Mouseover event triggered");
  console.log(previewPic);

  // Get the div with id "image"
  const imageDiv = document.getElementById("image");

  // Update the background image and text
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.textContent = previewPic.alt;
}

function unDo() {
  // Get the div with id "image"
  const imageDiv = document.getElementById("image");

  // Revert to the default background and text
  imageDiv.style.backgroundImage = "";
  imageDiv.textContent = "Hover over an image below to display here.";
}
