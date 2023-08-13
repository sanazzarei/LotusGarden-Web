// slide-show

// Select all elements with class "slide"
var slides = document.querySelectorAll(".slide");

// Initialize the slide index to 1
var slideIndex = 1;

// Call the showSlides function to display the first slide
showSlides(slideIndex);

// Function to show the next slide
function next(n) {

  // Increase the slide index by n
  showSlides((slideIndex += n));
}
// Function to show the previous slide
function prev(n) {

  // Set the slide index to n
  showSlides((slideIndex = n));
}
// Function to display the slides
function showSlides(n) {
  var i;
  // If n is greater than the number of slides, reset the slide index to 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  // If n is less than 1, set the slide index to the last slide
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
}
// sub menu-categories


// Select all elements with the class "has-submenu"
var categories = document.getElementsByClassName("has-submenu");

// Add a click event listener to each element with the class "has-submenu"
for (var i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", function (event) {
    // Find the submenu element within the clicked category
    var submenu = this.querySelector(".submenu");

    // Check if the submenu is currently displayed
    if (submenu.style.display === "block") {
      // If displayed, hide the submenu
      submenu.style.display = "none";
    } else {
      // If hidden, show the submenu
      submenu.style.display = "block";
    }
    // Prevent the click event from bubbling up to parent elements
    event.stopPropagation();
  });
}
// Add a click event listener to the document
document.addEventListener("click", function () {
  // Select all elements with the class "submenu"
  var submenus = document.getElementsByClassName("submenu");
  // Hide all submenus
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].style.display = "none";
  }
});

// scroll to top
// Attach a scroll event listener to the window
window.onscroll = function () {
  scrollFunction();
};
// Function to handle the scroll event
function scrollFunction() {
  // Check if the vertical scroll position of either the body or the document element is greater than 20 pixels
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    // If the scroll position is greater than 20 pixels, display the "scrollToTopBtn" element
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    // If the scroll position is less than or equal to 20 pixels, hide the "scrollToTopBtn" element
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}
// Function to scroll to the top of the page
function scrollToTop() {
    
  // Set the scroll position of both the body and the document element to 0, effectively scrolling to the top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
