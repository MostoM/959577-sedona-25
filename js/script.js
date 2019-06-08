var btn = document.querySelector(".button-modal-window");
  
var form = document.querySelector(".modal-window-wrap");

btn.addEventListener("click", function(evt){
	form.classList.toggle("hide-form");
});