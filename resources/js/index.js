var slideIndex = 1;
var tester;
showSlides();
dropdownButton();



function currentSlide(n) {
	clearTimeout(tester);
	showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    tester = setTimeout(showSlides, 5000); // Change image every 2 seconds
    slideIndex++;
}

function dropdownButton() {
	var dropdownSignup = document.getElementsByClassName("dropdownSignup");
	dropdownSignup[0].addEventListener("click", function (){
		this.classList.toggle("dropdownActive");
		
		
	 /* Toggle between hiding and showing the active panel */
       var panel = this.nextElementSibling;
       if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } 
       else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }	
	} );
	
	
}
