let selectText= document.getElementById("selectText");
let options= document.querySelectorAll(".options");
let arrow=document.getElementById("arrow");
const list= document.getElementById("lists");
let selectField= document.getElementById("selectField");

for(option of options){
    option.onclick= function(){
        selectText.innerHTML=this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    }
}
selectField.addEventListener("click",()=>{
     list.classList.toggle("hide");
     arrow.classList.toggle("rotate");
})
