const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img.header-image");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/all-dogs.jpg") {
    myImage.setAttribute("src", "images/bisc-butt.jpg");
  } else {
    myImage.setAttribute("src", "images/all-dogs.jpg");
  }
};

let myButton = document.querySelector("button");

function setUserName() {
  let myName = prompt("Please enter your name.");
  myName = myName.trim();
  if (!myName || myName === null || (myName && myName.length === 0)) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Welcome to the Pack, " + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome to the Pack, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
