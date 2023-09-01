var //myImage = document.querySelector("img");
    myImage = document.querySelector(".image1")
//var myBody = document.querySelector("body");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pockerface.jpg") {
    myImage.setAttribute("src", "images/JohnBlack.jpg");
    //myBody.style.backgroundColor = "green";
    document.querySelector("body").style.backgroundColor = "green";
  } else {
    myImage.setAttribute("src", "images/pockerface.jpg");
    //myBody.style.backgroundColor = "yellow";
    document.querySelector("body").style.backgroundColor = "yellow";
  }
}

var ButtonUser = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.", "Иван");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

ButtonUser.onclick = function () {
  setUserName();
}
