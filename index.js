const color=["red","green","blue","yellow","orange","pink","black","white","brown"];
const button=document.querySelector("button");
const body=document.querySelector("body");

button.addEventListener("click",changeBackground);

function changeBackground(){
    var randomNo=Math.floor(Math.random()*color.length);
    body.style.backgroundColor=color[randomNo];
    
}