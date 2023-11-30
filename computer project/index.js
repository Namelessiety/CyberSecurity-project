const mainTxt = document.getElementById("maintxt") 
const nextBtn = document.getElementById("nextbtn")
const prevBtn = document.getElementById("prevbtn")
const startBtnDiv = document.getElementById("startbtndiv")


let clicks = 0;
let startButtonShown = false;
const dialogues = [`<b>FOR AN IDEAL EXPERIENCE, PLEASE ENABLE FULLSCREEN ON THE WINDOW (F11/Fn + F11)</b>`,`Welcome! <br />this website will teach you about multiple cyber security topics
using different gamefied lessons! <br /> <br />
<i>navigate this text using the next and previous buttons at the bottom</i>`, "Firstly, id like to define cyber security. <br /> <br /> <br />Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. <br /> <br /> <br /> from here you will be sent to some threat examples and be taught how to avoid them (youll be tested) and youll also be taught how to take general precautions to increase the security of your device or accounts.", "Lets begin with one of the most common occuring cyberattacks, phishing! <br /> <br /> <i>click start to begin </i>"]; 

function updateDialog() {
  if (clicks < 0) {
    clicks = 0;
  } else if (clicks >= dialogues.length) {
    clicks = dialogues.length - 1;
  }
  mainTxt.innerHTML = dialogues[clicks];
}

nextBtn.addEventListener("click", function onNext() {
  clicks += 1;
  updateDialog();
  if (clicks === 2 && !startButtonShown){
    startBtnDiv.innerHTML= `<a href="stage2.html"><button class="btn" id="startbtn">Start</button></a>`;
    startButtonShown = true;
  }
});

prevBtn.addEventListener("click", function onPrev() {
  clicks -= 1;
  updateDialog();
});