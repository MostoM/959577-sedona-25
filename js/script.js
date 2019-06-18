var btn = document.querySelector(".button-modal-window");
  
var modalWindow = document.querySelector(".modal-window-wrap");

var dateArrivel = modalWindow.querySelector("[name=arrivel-date]");
var dateDeparture = modalWindow.querySelector("[name=date-of-departure]");
var adults = modalWindow.querySelector("[name=amount-of-adults]");
var children = modalWindow.querySelector("[name=amount-of-children]");

var isStorageSupport = true;
var storage = "";

var plusAdults = modalWindow.querySelector("[name=button-plus-adults]");
var minusAdults = modalWindow.querySelector("[name=button-minus-adults]");;
var plusChildren = modalWindow.querySelector("[name=button-plus-children]");;
var minusChildren = modalWindow.querySelector("[name=button-minus-children]"); 

modalWindow.classList.add("hide-form");

if (storage) {
	dateArrivel.value = storage;
	dateDeparture.value = storage;
	adults.value = storage;
	children.value = storage;
}

try{
	storage = localStorage.getItem("dateArrivel");
	storage = localStorage.getItem("dateDeparture");
	storage = localStorage.getItem("adults");
	storage = localStorage.getItem("children");
} catch (err) {
	isStorageSupport = false;
}
modalWindow.addEventListener("submit", function(evt){
	if (!dateArrivel.value || !dateDeparture.value || !adults.value || !children.value) {
		evt.preventDefault();
		modalWindow.classList.remove("error");
		modalWindow.offsetWidth = modalWindow.offsetWidth;
		modalWindow.classList.add("error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("dateArrivel", dateArrivel.value);
			localStorage.setItem("dateDeparture", dateDeparture.value);
			localStorage.setItem("adults", adults.value);
			localStorage.setItem("children", children.value);
		}
	}
})

btn.addEventListener("click", function(evt){
	modalWindow.classList.toggle("hide-form");
});


plusAdults.addEventListener("click", function(evt){
	adults.value++;
})

minusAdults.addEventListener("click", function(evt){
	if (adults.value > 0) {
		adults.value--;
	}
})

plusChildren.addEventListener("click", function(evt){
	children.value++;
})

minusChildren.addEventListener("click", function(evt){
	if (children.value > 0) {
		children.value--;
	}
})