const mainTxt = document.getElementById("maintxt") 
const nextBtn = document.getElementById("nextbtn")
const prevBtn = document.getElementById("prevbtn")
const navBtns = document.getElementById("nav-btns")

let clicks = 0;
let restartButtonShown = false;
const dialogues = [`<p>Congrats on passing the test! 🎉🎉</p>`,`<p>hopefully you found this experience useful</p>`,`<p>but now, all that is left is to give the sources used.</p>`,`
<p>Sources:</p>
<ul>
    <li><a href="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html">definition of cyber security</a></li>
    <li><a href="https://csrc.nist.gov/glossary/term/phishing">definition of phishing</a></li>
    <li><a href="https://cofense.com/knowledge-center/signs-of-a-phishing-email/">signs of phishing</a></li>
    <li><a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams">signs of phishing (2)</a></li>
    <li><a href="https://www.techs.co.nz/how-to-make-a-strong-password/">password 8-4 rule</a></li>
</ul>`,`<h4>credits:</h6>
        <br /><p>Ahmad Azzam Fareed Daghlas from Jordanian International Schools</p>`]
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
  if(clicks === 4 && !restartButtonShown){
    navBtns.innerHTML = `<a href="index.html"><button id="restartbtn" class="btn">Restart</button></a>`
  }
});

prevBtn.addEventListener("click", function onPrev() {
  clicks -= 1;
  updateDialog();
});