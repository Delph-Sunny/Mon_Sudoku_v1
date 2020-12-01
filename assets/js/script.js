/* General constant */
const container1El = document.querySelector(".container_1");
const container2El = document.querySelector(".container_2");
const startBtn = document.querySelector("#start-btn");


startBtn.addEventListener("click", function(event){
    container1El.style.display = "none";
    container2El.style.display = "block";
});   