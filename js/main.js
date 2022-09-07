window.onscroll = function(){
	scroll = document.documentElement.scrollTop;
	header = document.getElementById("header");
	if (scroll > 20){
		header.classList.add('nav-mod');
	} else if (scroll < 20){
		header.classList.remove('nav-mod');
	}
}



document.getElementById("btn-menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
nav = document.getElementById("nav");
boton = document.getElementById("ico-bars");

function mostrar_menu(){

	menu.classList.toggle('move-content');
	nav.classList.toggle('move-nav');
  boton.classList.toggle('fa-times');
}

window.addEventListener("resize", function(){
	if (window.innerWidth > 700) {
		menu.classList.remove('move-content');
		nav.classList.remove('move-nav');
	}
})







//SCROLL LENTO
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});