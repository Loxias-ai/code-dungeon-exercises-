// let screen = document.getElementById("screen");
// let up = document.getElementById("up");
// let down = document.getElementById("down");
// let reset = document.getElementById("reset");
// up.addEventListener("click", function(){
//     screen.innerText++;
// });
// down.addEventListener("click", function(){
    
//     if(screen.innerText <=0){
//         window.Error("Numbers can't be less than 0")
//     }
//     else{
//         screen.innerText--;
//     }
// });
// reset.addEventListener("click",function(){
//     screen.innerText = 0;
// });
let button = document.getElementById("btn");
let input = document.getElementById("input0");
let lists = document.getElementById("lists");
let container = document.querySelector(".container");

button.addEventListener("click", function() {
    let inputval = input.value;
    if (inputval) {
        let apepe = document.createElement("li");
        let taskText = document.createTextNode(inputval);
        apepe.appendChild(taskText);
        lists.appendChild(apepe);
        input.value = "";
        // let donebtn = document.createElement("p");
        // lists.appendChild(donebtn);
        // donebtn.textContent = "fa-regular fa-circle-check";
        let newHeight = container.scrollHeight + 20; // Calculate new height with some padding
        container.style.maxHeight = newHeight + "px";
    }
});
