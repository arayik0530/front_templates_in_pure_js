let buttons = document.getElementsByClassName("accordion");
let pluses = document.getElementsByClassName("plus");

for (let button of buttons) {
    button.addEventListener("click",  function () {
        let sign = this.lastChild;
        sign.innerHTML = sign.innerHTML === "+" ? "-" : "+";
        let text = this.nextElementSibling;
        if(text.style.display === "block"){
            text.style.display = "none";
        }
        else {
            text.style.display = "block";
        }
    });
}