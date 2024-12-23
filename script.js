// Get the overlay and close button
var overlay = document.getElementById("overlay");
var closeButton = document.getElementsByClassName("close")[0];

// Get the image elements and set up the click event for each
var images = document.getElementsByClassName("gallery-image");
var overlayImage = document.getElementById("overlayImage");
var overlayCaption = document.getElementById("overlayCaption");

// Add event listener for all images
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(event) {
        // Show the overlay
        overlay.style.display = "flex";
        
        // Set the image source to the clicked image's source
        overlayImage.src = this.src;
        
        // Set the caption to the image's data-caption
        overlayCaption.innerHTML = this.getAttribute("data-caption");
    }
}

// When the user clicks on the close button (×), close the overlay
closeButton.onclick = function() {
    overlay.style.display = "none";
}

// Optionally, close the overlay when clicking anywhere on the overlay
overlay.onclick = function(event) {
    if (event.target === overlay) {
        overlay.style.display = "none";
    }
}
