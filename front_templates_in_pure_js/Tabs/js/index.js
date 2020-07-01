let buttons = document.getElementsByClassName("tabLinks");

for(let i = 0; i < buttons.length; ++i){
    buttons[i].addEventListener("click", function () {
        this.classList.add("active");
        for(let j = 0; j < buttons.length; ++j){
            if(buttons[j] === this)
                continue;
            buttons[j].classList.remove("active");
        }

        let cList = this.classList;
        let contentList = document.getElementsByClassName("tabContent");
        for(let content of contentList){
           for(let x = 0; x < cList.length; ++x){
               if(content.id === cList[x]){
                   document.getElementById(content.id).style.display = 'block';
                   break;
               }
               else{
                   document.getElementById(content.id).style.display = 'none';
               }
           }
        }
    })
}