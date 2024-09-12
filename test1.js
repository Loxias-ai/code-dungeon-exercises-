let btn = document.getElementById("btn");
let mainT = document.getElementById("mtext");
let stext = document.getElementById("stext");

btn.addEventListener("click", function() {
  fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      mainT.textContent = data.quote;
      stext.textContent = "-" + data.author;
    });
});

function defaultt() {
  fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      mainT.textContent = data.quote;
      stext.textContent = "-" + data.author;
    });
}
defaultt();


