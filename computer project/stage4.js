const mainTxt = document.getElementById("maintxt") 
const nextBtn = document.getElementById("nextbtn")
const prevBtn = document.getElementById("prevbtn")
const startBtnDiv = document.getElementById("startbtndiv")
const navBtns = document.getElementById("nav-btns")

let clicks = 0;
const dialogues = [`Congrats on passing the password test!`,`Now, as this is the last challenge, I will increase the difficulity`,`you will now be taught about basic encryption and then made to solve a small puzzle to win.`, `think of encryption like turning secret messages into puzzles that only the right people can solve. It's like playing a game where you jumble up your words in a special way so that only your friend who knows the secret code can unscramble and read your message.`, `Imagine you want to send your friend the word "HELLO" but you don't want anyone else to understand it if they intercept it. You decide to use a code where you shift each letter by three places in the alphabet`, `H -> K <br/>
E -> H<br/>
L -> O<br/>
L -> O<br/>
O -> R<br/>

So, "HELLO" becomes "KHOOR" using this simple code.`,
`When your friend gets the message "KHOOR," 
they know to shift each letter back three places in the alphabet`,`K -> H<br/>

H -> E<br/>
O -> L<br/>
O -> L<br/>
R -> O<br/>

And voila! They decode the message back to "HELLO."`,
`In real life, encryption involves much fancier codes and math, but the idea is similar:
 you use a special rule (called an algorithm) and a secret key to transform your message into 
 something unreadable (ciphertext). Only those who have the right key can transform it back into 
 the original message (plaintext). It helps keep your information safe from prying eyes!`,
 `now,their are two types of ciphers, symmetric and asymmetric`,
 `Imagine you have two special boxes to send secret messages to your friend.`,
 `In the first box , let's call it the "Secret Lock Box," 
 you have a magical key that can both lock and unlock the box. You and your friend agree on this
  special key in advance. So, you put your secret message inside the box,
   lock it with the key, and send it to your friend. When your friend gets it, 
   they use the same key to unlock the box and read the message. The key is the same for locking 
   and unlocking (symmetric) and is known by both you and your friend.`,
   `Now, in the second box, called the "Magic Duo Box," there are two special keys: 
   one is for locking (let's call it the "public key"), and the other is for unlocking
    (the "private key"). You keep the key for unlocking (private key) to yourself,
 while the locking key (public key) is shared openly. When you want to send a secret message,
  you use your friend's public key to lock the box. Once it's locked,
   only your friend's private key (which only they have) can unlock it to reveal the message.
    The keys work together, but they are different
 (asymmetric) and used for different purposes.`,
 `now in modern times, both are used (hybrid encryption)`,
 `Symmetric ciphers are generally faster and more efficient for encrypting large amounts of data.
  They are commonly used for securing the actual data because of their speed. However,
   the challenge with symmetric encryption is securely sharing the secret key between parties 
   without anyone else intercepting it.
`,`Asymmetric ciphers, on the other hand, are used primarily for securely 
exchanging the secret keys used in symmetric encryption. They help in securely 
transmitting the symmetric keys between parties by using a public key to encrypt
 the symmetric key, and the recipient uses their private key to decrypt it.
  Asymmetric encryption is computationally more expensive than symmetric encryption 
  but is very useful for securely exchanging keys.`,`for the sake of this challenge, 
  only symmetric ciphers will be covered`,`the most widely used encryption algorithm is AES,which
  is recommended for secure communications,
   but we will use a considerably simpler encryption algorithm here (and us such, weaker)`,
   `but before we do so, you should learn about the different types of symmetric ciphers`,
   `Substitution Ciphers: It's like a secret alphabet swap! In a simple way, you replace each letter of the alphabet with another letter. For example, 'A' becomes 'D', 'B' becomes 'E', 
   and so on. The Caesar cipher is a type of substitution cipher where you shift all the letters 
   by a fixed number (like shifting 'A' to 'D' by three places).`,
   `Transposition Ciphers: This is like shuffling letters around. Instead of changing the letters themselves, you change the order of the letters in the message. For instance,
    if your message is "HELLO THERE," you might write it backward as "EREHT OLLEH."`,
`Polyalphabetic Ciphers: These ciphers are more complex! They use different secret alphabets depending on the position of the letters in the message. The Vigenère cipher is an 
example. It uses a keyword to decide which alphabet to use at each letter position to encode
 the message.`,
 `Stream Ciphers: Imagine having a secret running key that you combine with your message to make it secret. It's like mixing secret ingredients with your plain text. Stream ciphers do this
  by combining the key with the plaintext bit by bit or byte by byte to create the cipher text.`,
`Block Ciphers: Instead of mixing one bit at a time, block ciphers work with bigger chunks (blocks) of text. They split the message into 
fixed-size blocks and then use the key to perform a series of transformations on each block.`,
`now, you'll be made to decrypt a trifid cipher`,
`With the trifid cipher, you have a grid made up of three rows and three columns. But here's the fun part: you need a key to set up this grid. The key tells you how to arrange the letters within the rows and columns of the grid.`,`

Let's say your key is a word, like "SECRET". First, you write down this word without repeating any letters. Then, you fill the rest of the grid with the remaining letters of the alphabet that aren't in your key, making sure to keep the order.`,`

Now, to encrypt your message, you take your message and turn each letter into three coordinates on the grid. For example, if you want to encrypt the letter "H", you'd find where "H" appears in the grid and note down the row number, column number, and the "depth" or layer number (since there are three layers in the grid).

Your encrypted message will then consist of sets of three numbers for each letter in your original message. These numbers represent the row, column, and depth of each letter on the grid.`,`

When someone receives these sets of numbers, they must have the same key you used to create the grid. Using the key, they recreate the grid layout by arranging the letters in the same way you did. Then, they use the received numbers to figure out which letter each set corresponds to by checking the intersections on the grid.`,`

So, just like a key that fits into a lock to open it, the key in the trifid cipher helps set up the grid that transforms letters into three coordinates. This way, only people with the correct key can decode the message correctly.`,
`at this point you have the option of doing things manually,
 or using <a href="https://www.boxentriq.com/code-breaking/trifid-cipher" target="_blank">a tool
  like this one</a><br/>here is the key and the cipher text:<br/>
  ciphertext:<br/><div id="ciphertext"><small>RDCSXHRJCQOBXFRDEFFDFNSFGITDGGEROSEPDOIIIGFIKRTKTLXCTULIHYCHFSETC+RFMFRLFFMTMQAF</small></div><br/>
  key:SECRETKEY`]; 

function updateDialog() {
  if (clicks < 0) {
    clicks = 0;
  } else if (clicks >= dialogues.length) {
    clicks = dialogues.length - 1;
  }
  mainTxt.innerHTML = dialogues[clicks];
}
let cipherInputShown = false;

nextBtn.addEventListener("click", function onNext() {
  clicks += 1;
  updateDialog();

  cipherInputShown = false;

  if (clicks === 30 && !cipherInputShown) {
    navBtns.innerHTML = `<input id="cipherinput" placeholder="enter plaintext."></input>
                         <button id="submit">submit</button>`;
    cipherInputShown = true;

    const cipherInput = document.getElementById('cipherinput');
    const submit = document.getElementById('submit');

    submit.addEventListener("click", function checkCipher() {
      const cipherValue = cipherInput.value;

      const hasCorrectText = /THEGREATPASSWORDNEEDEDFORYOUTOPASSWWWWRIRIRIENTERTHISINSIDETHEINPUTTAGANDCONFIRM/.test(cipherValue);

      if (hasCorrectText) {
        navBtns.innerHTML = `<a href="sources.html"><button class="btn" id="nextbtn">Finish</button></a>`;
      }
    });

  }
});

prevBtn.addEventListener("click", function onPrev() {
  clicks -= 1;
  updateDialog();
});

