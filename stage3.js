const mainTxt = document.getElementById("maintxt") 
const nextBtn = document.getElementById("nextbtn")
const prevBtn = document.getElementById("prevbtn")
const startBtnDiv = document.getElementById("startbtndiv")
const navBtns = document.getElementById("nav-btns")


let clicks = 0;
let passInputShown= false;
const dialogues = [
  `<p>Congrats on passing the phishing test!<br /><br />Now, you should learn how to create strong passwords for your accounts.</p>`,
  `<p>So, how exactly do you make a good password? <br /><br />Well, it's actually quite simple! You just need to follow some basic rules, and you'll be ready to go.</p>`,
  `<p>One of the most important rules you should follow when creating a password is the "8-4 rule". This rule essentially states that your password needs to have 8 characters or more, with at least 1 being uppercase, another lowercase, a number, and a special character (which adds up to 4!).</p>`,
  `<p>To make things more convenient, it's good practice to name your files something that may be memorable for you but not quite for others, like the first three letters of your favorite ice cream flavor!<br /> <br />And if you want to make things even more secure, you can add certain rules that only you know, for example: change every 'O' to 'I' and every 'A' to 'V', and certain letters are always followed by a special character, like 'E' being followed by '&'!<br /> <br />By applying those rules, you can create memorable yet complicated passwords.</p>`,
  `<p>Password managers are also a good thing to have if you have many passwords and might be more forgetful than others. But remember to use a safe and trusted password manager. For personal use, I recommend Bitwarden for most people and KeePass for the more advanced users.</p>`,
  `<p>Now, if you want to get the buttons back and proceed to the next stage, enter a password that follows the 8-4 rule.<br /> <br /> <br /> <br /><small>8 characters, uppercase, lowercase, number, and special character</small></p>`
];






function updateDialog() {
  if (clicks < 0) {
    clicks = 0;
  } else if (clicks >= dialogues.length) {
    clicks = dialogues.length - 1;
  }
  mainTxt.innerHTML = dialogues[clicks];
  
  if (clicks === 0) {
    prevBtn.style.display = 'none'; 
  } else {
    prevBtn.style.display = 'inline-block'; 
  }
}


nextBtn.addEventListener("click", function onNext() {
  clicks += 1;
  updateDialog();
  if (clicks === 5 && !passInputShown) {
    const renderPasswordInput = () => {
      navBtns.innerHTML = `<input id="passinput" placeholder="enter password."></input>
                           <button id="submit">submit</button>`;
      const passInput = document.getElementById('passinput');
      const submit = document.getElementById('submit');
  
      submit.addEventListener('click', function checkPass() {
        const passValue = passInput.value;
  
        const hasUpperCase = /[A-Z]/.test(passValue);
        const hasLowerCase = /[a-z]/.test(passValue);
        const hasDigit = /\d/.test(passValue);
        const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(passValue);
  
        if (passValue.length >= 8 &&
            hasUpperCase &&
            hasLowerCase &&
            hasDigit &&
            hasSpecialChar) {
          navBtns.innerHTML = `<button class="btn" id="retrybtn">Retry</button>
                               <a href="stage4.html"><button class="btn" id="nextbtn">Next</button></a>`;
  
          const retryBtn = document.getElementById('retrybtn');
          const nextBtn = document.getElementById('nextbtn');
  
          retryBtn.addEventListener('click', function () {
            renderPasswordInput(); 
          });
        }else{
          alert("Wrong! try again.")
        }
      });
    };
  
    renderPasswordInput(); 
  }
  
    }); 
  




prevBtn.addEventListener("click", function onPrev() {
  clicks -= 1;
  updateDialog();
});

prevBtn.style.display = 'none';