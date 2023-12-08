var hamburger = document.querySelectorAll(".hamburger")[0];
var menu = document.querySelectorAll(".menu")[0];
var close = document.querySelectorAll(".close")[0];


hamburger.addEventListener("click", function(){
    menu.classList.add("active")
});

close.addEventListener("click", function(){
    menu.classList.remove("active")
})