const mainTxt = document.getElementById("maintxt") 
const nextBtn = document.getElementById("nextbtn")
const prevBtn = document.getElementById("prevbtn")
const startBtnDiv = document.getElementById("startbtndiv")
const navBtns = document.getElementById("nav-btns")


let clicks = 0;
let passInputShown= false;
const dialogues = [`Congrats on passing the phishing the test!<br /><br />
now, you should learn how to make strong passwords for your accounts.`, 
`so how exactly do you make a good password? <br /><br />
well it's actually quite simple! you just need to follow some basic rules and you'll be ready to go`, `one of the most most rules you should follow when creating a password is: <br /><br />
 the "8-4 rule" which essentially states that your password needs to have 8 characters or more, at least 1 being uppercase, another lowercase, a number, and a special character (they add up to 4!)`, `To make things more convenient, its good practice to name your files something that may be memorable for you but not quite to others like the first three letters of your favorite icecream flavor! <br /> <br />and if you want to make things even more secure you can add certain rules that only you know of , for example : change every O to I and every A to V and certain letters are always followed by a special character like e being followed by & <br /> <br /> by applying those rules you can get memorable yet complicated passwords.`, `password managers are also a good thing to have if you have many passwords and may be more forgetful than others, but remember to use a safe and trusted password manager. for personal use, i recommend bitwarden for most people and keepass for the more advanced people.`, `now, if you want to get the buttons back and pass onto the next stage, enter a password that follows the 8-4 rule<br /> <br /> <br /> <br /><small>8 chars, uppercase, lowercase, number and speical character</small>`]; 





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

  if (clicks === 5 && !passInputShown) {
    navBtns.innerHTML = `<input id="passinput" placeholder="enter password."></input>
                         <button id="submit">submit</button>`;
    passInputShown = true;

    const passInput = document.getElementById('passinput');
    const submit = document.getElementById('submit')
    const passVal = passInput.value; // Read the input value when necessary 
    
    
    passInput.addEventListener('input', function () {
      const passValue = passInput.value;

      const hasUpperCase = /[A-Z]/.test(passValue);
      const hasLowerCase = /[a-z]/.test(passValue);
      const hasDigit = /\d/.test(passValue);
      const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(passValue);

      submit.addEventListener("click",function checkPass(){
        if (passValue.length >= 8 &&
          hasUpperCase &&
          hasLowerCase &&
          hasDigit &&
          hasSpecialChar) {
        navBtns.innerHTML = `      <a href="stage4.html"><button class="btn" class="btn" id="nextbtn">Next</button></a>`
          }

    });
  }
    )}
})





prevBtn.addEventListener("click", function onPrev() {
  clicks -= 1;
  updateDialog();
});