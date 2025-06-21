let num = document.getElementsByClassName("num");
let type = document.getElementById("type");
let plus = document.getElementById("plusbtn");
let minus = document.getElementById("minusbtn");
let multi = document.getElementById("multiply");
let divide = document.getElementById("divide");
let clearbtn = document.getElementById("clearbtn");
let backbtn = document.getElementById("backbtn");
let equalto = document.getElementById("btn-")
    
Array.from(num).forEach(buttons => {
    buttons.addEventListener("click",function(){
        type.value += buttons.innerHTML;
    })
});
plus.addEventListener("click",function(){
    type.value += "+"
});
minus.addEventListener("click",function(){
    type.value += "-"
});
multi.addEventListener("click",function(){
    type.value += "*"
});
divide.addEventListener("click",function(){
    type.value += "/"
});
clearbtn.addEventListener("click",function(){
    type.value = "";
});
backbtn.addEventListener("click",function(){
    type.value = type.value.slice(0,-1)
});

equalto.addEventListener("click",function(){
    try{
        type.value = eval(type.value)
    }catch{
        type.value = "error"
    }
})