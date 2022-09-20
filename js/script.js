let generator=document.querySelector(".gen");
let num=document.querySelector(".num");
let body=document.querySelector("body");
generator.addEventListener("click",()=>{
    num.innerHTML=`#${Math.random().toString(16).substring(2,8)}`;
    bgColor();
});
let bgColor=function (){
    body.style.backgroundColor=`#${Math.random().toString(16).substring(2,8)}`;
}