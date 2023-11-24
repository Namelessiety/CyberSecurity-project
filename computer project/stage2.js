const Header = document.getElementById("head")
const Footer = document.getElementById("foot")
const mainTxt = document.getElementById("contenttxt")
const BstartBtn = document.getElementById("BstartBtn")
const Answers = document.getElementById("answers")



let initiate1 = false;
let currentState = 1;


BstartBtn.addEventListener("click", function onStart() {
    initiate1 = true;
    currentState = 1;
    Header.classList.toggle("activeHeader");
    Footer.classList.toggle("activeFooter");
    BstartBtn.remove();
    setupStage1();
});



function setupStage1() {
    Header.innerHTML = `<img src="images/instagram.png" />
                        <h1>HACKED!</h1>`;
    mainTxt.innerHTML = `<p>
                            Your account has been hacked!! <br />
                            But do not worry, send your email and password to 
                            instogrem@huh.net so we can recover swiftly!
                            If you don't send in 48 hours, your account will be deleted, and 
                            we will report you to the police for hacking.
                        </p>`;
    Footer.innerHTML = `<p><small>from:<b>instogramee112.john@outlook.com</b></small></p>`
    Answers.innerHTML = ` <button class="ansbtns" id="real">This is a real email</button>
                           <button class="ansbtns" id="fake">This is a phishing email</button>`;

    const fake = document.getElementById("fake");
    const real = document.getElementById("real");

    fake.addEventListener('click', function() {
        if (initiate1 === true && currentState === 1) {
            currentState = 2;
            setupStage2();
        }
    });
    real.addEventListener('click', function() {
        if (initiate1 === true && currentState === 1) {
            setupFailStage1();
        }
    });
}

function setupFailStage1() {
    Header.innerHTML = `<h1>WRONG!</h1>`;
    mainTxt.innerHTML = `<p><b>that email had bad grammar and spelling mistakes,was oddly short, and asked for private information while linking to a fake domain! </b> </p>`;
    Footer.innerHTML = `click "Back" to retry`;
    Answers.innerHTML = `<button id="backButton">Back</button>`;

    const backButton = document.getElementById("backButton");

    backButton.addEventListener('click', function() {
        currentState = 1;
        setupStage1();
    });
}


function setupStage2() {
    Header.innerHTML = `<h1>CORRECT!</h1>`;
    mainTxt.innerHTML = `<p>Click Next to proceed.</p>`;
    Footer.innerHTML = ``;
    Answers.innerHTML = `<button id="nextButton">Next</button>`;

    const nextButton = document.getElementById("nextButton");

    nextButton.addEventListener('click', function() {
        currentState = 3;
        setupStage3();
        // Setup for next stage
        // Call the appropriate setup function for the next stage (e.g., setupStage3())
    });
}


function setupStage3() {
    Header.innerHTML = `<a href="https://open.spotify.com/" target='_blank'><img src="images/spotify.png" /></a>
                        <h1><b>	New login to Spotify </b></h1>`;
    mainTxt.innerHTML = `<p>
                            We noticed you logged in from a new device. If this was you, there's nothing for you to
                             do right now.
	                        <br />
                             Location <b>Jordan</b>
                             Time <b>October 26, 2023 at 2:23:34 PM EET</b>
                        </p>
                        <h3><b>Not you?</b></h3>
                        <p>Take a few minutes to secure your account. </p>
                        <a href="https://www.spotify.com/jo-ar/account/security/checkup/" target='_blank'><p>secure account</p></a>
                        <br />
                        <p> Make sure this email is from Spotify: <br/><a href="https://support.spotify.com/article/suspicious-email" target='_blank'>support.spotify.com/article/suspicious-email/</a> </p>

        
        `;



    Footer.innerHTML = `	<small><p>Spotify AB, Regeringsgatan 19, 111 53, Stockholm, Sweden.
                            from:<b>no-reply@spotify.com</b></small></p>
                            `
    Answers.innerHTML = ` <button class="ansbtns" id="real">This is a real email</button>
                           <button class="ansbtns" id="fake">This is a phishing email</button>`;

    const fake = document.getElementById("fake");
    const real = document.getElementById("real");

    real.addEventListener('click', function() {
        if (initiate1 === true && currentState === 3) {
            currentState = 4;
            setupStage4();
        }
    });
    fake.addEventListener('click', function() {
        if (initiate1 === true && currentState === 3) {
            setupFailStage2();
        }
    });
}




function setupStage4() {
    Header.innerHTML = `<h1>CORRECT!</h1>`;
    mainTxt.innerHTML = `<p>Click Next to proceed.</p>`;
    Footer.innerHTML = ``;
    Answers.innerHTML = `<button id="nextButton">Next</button>`;

    const nextButton = document.getElementById("nextButton");

    nextButton.addEventListener('click', function() {
        currentState = 5;
        setupStage5();
    });
}



function setupFailStage2() {
    Header.innerHTML = `<h1>WRONG!</h1>`;
    mainTxt.innerHTML = `that was a professional email without any of the issues of phishing emails`;
    Footer.innerHTML = `click "Back" to retry`;
    Answers.innerHTML = `<button id="backButton">Back</button>`;

    const backButton = document.getElementById("backButton");

    backButton.addEventListener('click', function() {
        currentState = 3;
        setupStage3();
    });
}


function setupStage5(){
    Header.innerHTML = `<img src="images/googlephotos.png" />` ;
mainTxt.innerHTML = `<p>we have published your photos.</p>
                    <br/>
                    <p>5 pictures
                    and
                    2 videos
                    from "private folder".</p>
                    <br/>
                    <p><a href="other files/The great evil.txt" target="_blank">view uploaded pictures.</a></p>
                    `;
Footer.innerHTML = `<p><small>Google 2023</small></p> 
                    <small>from <b>goolgle@gmail.com</b></small>`
Answers.innerHTML = ` <button class="ansbtns" id="real">This is a real email</button>
       <button class="ansbtns" id="fake">This is a phishing email</button>`;

const fake = document.getElementById("fake");
const real = document.getElementById("real");

real.addEventListener('click', function() {
if (initiate1 === true && currentState === 5) {
currentState = 5;
setupFailStage3();
}   

});
fake.addEventListener('click', function() {
    if (initiate1 === true && currentState === 5) {
        currentState = 6;
        setupStage6();

    }
});
};


function setupFailStage3() {
    Header.innerHTML = `<h1>WRONG!</h1>`;
    mainTxt.innerHTML = `the email ws sent by "goolgle"`;
    Footer.innerHTML = `click "Back" to retry`;
    Answers.innerHTML = `<button id="backButton">Back</button>`;

    const backButton = document.getElementById("backButton");

    backButton.addEventListener('click', function() {
        currentState = 5;
        setupStage5();
    });
}


function setupStage6() {
    Header.innerHTML = `<h1>Congrats!</h1>`;
    mainTxt.innerHTML = `   <p>You passed the phishing test! time to move onto something else</p>
                            <p>Click Next to proceed.</p>`;
    Footer.innerHTML = ``;
    Answers.innerHTML = `<a href="stage3.html"><button id="nextButton">Next</button></a>`;

    const nextButton = document.getElementById("nextButton");

  //  nextButton.addEventListener('click', function() {
     //   currentState = 5;
       // setupStage5();
    //});
}