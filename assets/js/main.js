let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

$(document).ready(function(){
  $("#open").click(function(){
    $("#close").css("display", "block");
    $("#open").css("display", "none");
    $(".nav-links-m").slideDown(500);
  });

  $("#close").click(function(){
    $("#open").css("display", "block");
    $("#close").css("display", "none");
    $(".nav-links-m").slideUp(500);
  });

});


$(document).ready(function(){
  $("")
});