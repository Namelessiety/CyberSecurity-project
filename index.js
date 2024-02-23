const mainTxt = document.getElementById("maintxt");
const nextBtn = document.getElementById("nextbtn");
const prevBtn = document.getElementById("prevbtn");
const startBtnDiv = document.getElementById("startbtndiv");

let clicks = 0;
let startButtonShown = false;
const dialogues = [
  `<h1><b>FOR AN IDEAL EXPERIENCE, PLEASE ENABLE FULLSCREEN ON THE WINDOW (F11/Fn + F11)</b></h1>`,
  `<p>Welcome! <br />This website will teach you about multiple cybersecurity topics using different gamified lessons! <br /> <br />
  <i>Navigate this text using the next and previous buttons at the bottom</i></p>`,
  `<p>Firstly, I'd like to define cybersecurity. <br /> <br /> <br />Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. <br /> <br /> <br />From here, you will be sent to some threat examples and be taught how to avoid them, and you'll also be taught how to take general precautions to increase the security of your devices or accounts.</p>`,
  `<p>Let's begin with one of the most commonly occurring cyberattacks: phishing! <br /> <br /><i>Click start to begin</i></p>`
];

function updateDialog() {
  if (clicks < 0) {
    clicks = 0;
  } else if (clicks >= dialogues.length - 1) {
    clicks = dialogues.length - 1;
    nextBtn.style.display = "none"; 
  } else {
    nextBtn.style.display = "block"; 
  }

  if (clicks <= 0) {
    prevBtn.style.display = "none"; 
  } else {
    prevBtn.style.display = "block";
  }

  mainTxt.innerHTML = dialogues[clicks];
}

nextBtn.addEventListener("click", function onNext() {
  clicks += 1;
  updateDialog();
  if (clicks === 3 && !startButtonShown) {
    startBtnDiv.innerHTML = `<a href="stage2.html"><button class="btn" id="startbtn">Start</button></a>`;
    startButtonShown = true;
  }
});

prevBtn.addEventListener("click", function onPrev() {
  clicks -= 1;
  updateDialog();
});

prevBtn.style.display = "none";
