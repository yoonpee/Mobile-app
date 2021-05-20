const back = document.querySelector(".back");
const chat = document.querySelector(".chat");
const chatLogin = document.querySelector(".chat-login")
const userBack = document.querySelector("#user-comments");
const container = document.querySelector("#container");
const userInput = document.querySelector("#userInput");
const logIn = document.getElementById('log-in');

/* Main article */
back.addEventListener("click", () => {
  userBack.classList.add("user-back");
});

/* login page */
chatLogin.addEventListener("click", () => {
  logIn.classList.toggle('on');

});
/* chat page*/
chat.addEventListener("click", ()=>{
    userBack.classList.remove("user-back");
    userBack.classList.add('user-chat');
    console.log("?")
    
})

/* user input */
userInput.addEventListener("submit", addChat);

/* Function */

function addChat(e) {
  e.preventDefault();
  const inputValue = userInput.querySelector(".inputValue");
  const userInfo = document.createElement("div");
  userInfo.innerHTML = `
  
  <img src="img/img.jpg" alt="pp1" />
  <div class="text-box">
    <strong>Cizion<i class="fas fa-times deleteBtn"></i></strong>
    <span>Just now</span>
    <p>${inputValue.value}</p>
  </div>
  <div class="user-func">
    <button><i class="far fa-heart" id="heart"></i>Like</button>
    <button><i class="fas fa-heart-broken"></i>Dislike</button>
  </div>
  `;
  userInfo.classList.add("user-info");
  userBack.appendChild(userInfo);
  inputValue.value = "";

  /*delete chat*/
  const deleteBtn = userInfo.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", (e) => {
    userInfo.classList.add("userInfo-delete");
  });
}



