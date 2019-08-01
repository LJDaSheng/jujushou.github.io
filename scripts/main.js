let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myHeading.onclick = function(){
    alert("别点我");
}
let myImg = document.querySelector("img");
let button = document.querySelector("button");
myImg.onclick = function(){
    let imgSrc = this.getAttribute('src');
    if(imgSrc === "images/123.jpg"){
        myImg.setAttribute("src","images/234.jpg");
    }else{
        myImg.setAttribute("src","images/123.jpg");
    }
}

function setHeading(name){
    myHeading.textContent = "hello"+name;
}

function setUserName(){
    let yourName = prompt("请输入你的名字");
    localStorage.setItem("name",yourName);
    setHeading(yourName);
}

let name = localStorage.getItem("name");
if(!name){
    setUserName();
}else{
    setHeading(name);
}

button.onclick = setUserName;