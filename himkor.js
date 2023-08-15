$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var navbar = document.querySelector(".navbar");
	var content = document.querySelector(".content");
	var threshold = 100; // Adjust this value as needed
  
	function updateNavbar() {
	  if (window.scrollY > threshold) {
		navbar.classList.add("navbar-white");
	  } else {
		navbar.classList.remove("navbar-white");
	  }
	}
  
	updateNavbar();
	window.addEventListener("scroll", updateNavbar);
  });
  