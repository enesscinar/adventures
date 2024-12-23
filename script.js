// Get the modal
var modal = document.getElementById("imageModal");

// Get all images with the class "gallery-image"
var images = document.getElementsByClassName("gallery-image");

// Get the modal image element
var modalImg = document.getElementById("modalImage");

// Get the caption element
var captionText = document.getElementById("modalCaption");

// Loop through each image and add an event listener for clicks
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(event) {
        // Get the clicked image and caption
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;  // Display the alt text as the caption (or use data-caption)
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
