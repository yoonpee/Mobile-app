const chatLogin = document.querySelector(".chat-login");
const userBack = document.querySelector("#user-comments");
const container = document.querySelector("#container");
const userInput = document.querySelector("#userInput");
const logIn = document.getElementById("log-in");

/* user input */
userInput.addEventListener("submit", addChat);

/* Function */

function addChat(e) {
  e.preventDefault();
  const inputValue = userInput.querySelector(".inputValue");
  const userInfo = document.createElement("div");
  let spam = ["...", "음...", "하하하", "그니깐"];
  for (let i = 0; i < spam.length; i++) {
    if (inputValue.value === spam[i]) {
      return false;
    }
    else {
      userInfo.innerHTML = `
    
    <img src="img/img.jpg" alt="pp1" />
    <div class="text-box">
      <strong>Cizion<i class="fas fa-times deleteBtn"></i></strong>
      <span>Just now</span>
      <p contenteditable="true" class="myP">${inputValue.value}</p>
    </div>
    <div class="user-func">
      <button class="heartBtn"><i id="heart" class="fas fa-heart" id="heart"></i>Like</button>
      <button class="brokenBtn"><i id="broken" class="fas fa-heart-broken"></i>Dislike</button>
    </div>
    `;
    }
  }


  userInfo.classList.add("user-info");
  userBack.appendChild(userInfo);
  inputValue.value = "";

  /*delete chat*/
  const deleteBtn = userInfo.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", (e) => {
    userInfo.classList.add("userInfo-delete");
  });
  liked();
}
/* like function */
const heartBtn = document.querySelectorAll(".heartBtn");
const brokenBtn = document.querySelectorAll(".brokenBtn");

function liked(){

for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener("click", (clicked) => {
    heartBtn[i].classList.toggle("on");
  });
}
for (let k = 0; k < brokenBtn.length; k++) {
  brokenBtn[k].addEventListener("click", () => {
    brokenBtn[k].classList.toggle("on");
  });
}
}
