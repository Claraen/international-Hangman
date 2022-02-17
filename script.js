//global variables here
var numGuess = 0;
var guessedLetters = [];
var word = "";
var wordLength = 0;
var nearlyRight = "";
var letterGuess = "";

function startGame() {
  document.getElementById("youDidIt").style.display = "none";
  document.getElementById("guessedLetters").innerHTML = "";
  numGuess = 10;
  document.getElementById("image").src = images[numGuess];
  document.getElementById("numGuesses").innerHTML = numGuess;
  guessedLetters = [];
  if (document.getElementById("difficult").value == 'sel') {
    word = makeRandom(10);
    wordLength = word.length;
  }
  if (document.getElementById("difficult").value == 'count') {
    word = data[Math.floor(Math.random() * data.length)];
    wordLength = word.length;
  }
  if (document.getElementById("difficult").value == 'cont') {
    word = cData[Math.floor(Math.random() * cData.length)];
    wordLength = word.length;
  }
  if (document.getElementById("difficult").value == 'stat') {
    word = stateData[Math.floor(Math.random() * stateData.length)];
    wordLength = word.length;
  }
  document.getElementById("printWord").innerHTML = "";
  for (var i = 0; i < wordLength; i++) {
    if (word[i] == " ") {
      document.getElementById("printWord").innerHTML += " ";
    } else {
      document.getElementById("printWord").innerHTML += "_";
    }
  }
  document.getElementById("guessLetter").style.display = "block";
  document.getElementById("submitLetter").style.display = "block";
  document.getElementById("guessRem").style.display = "block";
  document.getElementById("guest").style.display = "block";
}

function printWord() {
  nearlyRight = document.getElementById("printWord").innerHTML;
  lowerCaseWord = word.toLowerCase();
  console.log(lowerCaseWord);
  document.getElementById("printWord").innerHTML = "";
  if (numGuess != 0) {
    var guessRight = false;
    for (var u = 0; u < wordLength; u++) {
      if (word[u] == letterGuess) {
        document.getElementById("printWord").innerHTML += letterGuess;
        guessRight = true;
      } else {
        if (nearlyRight[u] != "_") {
          document.getElementById("printWord").innerHTML += word[u];
        } else {
          document.getElementById("printWord").innerHTML += "_";
        }
      }
    }
    if (!guessRight && !guessedLetters.includes(letterGuess)) {
      numGuess -= 1;
      console.log(numGuess);
      document.getElementById("numGuesses").innerHTML = numGuess;
    }
     document.getElementById("image").src = images[numGuess];
  } else {
    wrongEnd();
  }
  nearlyRight = document.getElementById("printWord").innerHTML;
  if (nearlyRight == word) {
    correct();
  }
}

function correct() {
  document.getElementById("youDidIt").style.display = "block";
  document.getElementById("youDidIt").innerHTML = "You did it. Congradulations."
  document.getElementById("guessLetter").style.display = "none";
  document.getElementById("submitLetter").style.display = "none";
}

function wrongEnd() {
  document.getElementById("youDidIt").style.display = "block";
  document.getElementById("correctWord").style.display = "block";
  document.getElementById("youDidIt").innerHTML = "You did it... <p> Might want to reevaluate your goals in life."
  document.getElementById("correctWord").innerHTML = "your word was " + word;
  document.getElementById("guessLetter").style.display = "none";
  document.getElementById("submitLetter").style.display = "none";
  document.getElementById("guessRem").style.display = "none";
  document.getElementById("guest").style.display = "none";
}

function guessLetter() {
  letterGuess = document.getElementById("guessLetter").value;
  if (letterGuess.length == 1) {
    letterGuess = letterGuess.toUpperCase();
    console.log(letterGuess);
    document.getElementById('guessLetter').value = "";
    printWord();

    if (!guessedLetters.includes(letterGuess)) {
      guessedLetters.push(letterGuess);
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
  }
}

function keyListener() {

// Get the input field
var input = document.getElementById("guessLetter");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submitLetter").click();
  }
});

}

var images = ['photos/hang_9.gif','photos/hang_8.gif','photos/hang_7-1.gif','photos/hang_6.gif','photos/hang_5.gif','photos/hang_4.gif','photos/hang_3.gif','photos/hang_2-1.gif','photos/hang_1-1.gif','photos/hang_0.gif','photos/download.png']

function makeRandom(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

var cData = ['EUROPE', 'NORTH AMERICA', 'SOUTH AMERICA', 'AFRICA', 'ASIA', 'AUSTRALIA', 'ANTARTICA']

var stateData = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING']

var data = [
  'AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'ANDORRA', 'ANGOLA', 'ANTIGUA AND BARBUDA', 'ARGENTINA', 'ARMENIA', 'AUSTRALIA', 'AUSTRIA', 'AZERBAIJAN', 'THE BAHAMAS', 'BAHRAIN', 'BANGLADESH', 'BARBADOS', 'BELARUS', 'BELGIUM', 'BELIZE', 'BENIN', 'BHUTAN', 'BOLIVIA', 'BOSNIA AND HERZEGOVINA', 'BOTSWANA', 'BRAZIL', 'BRUNEI', 'BULGARIA', 'BURKINA FASO', 'BURUNDI', 'CABO VERDE', 'CAMBODIA', 'CAMEROON', 'CANADA', 'CENTRAL AFRICAN REPUBLIC', 'CHAD', 'CHILE', 'CHINA', 'COLOMBIA', 'COMOROS', 'DEMOCRATIC REPUBLIC OF THE CONGO', 'REPUBLIC OF THE CONGO', 'COSTA RICA', 'COTE DIVOIRE', 'CROATIA', 'CUBA', 'CYPRUS', 'CZECH REPUBLIC', 'DENMARK', 'DJIBOUTI', 'DOMINICA', 'DOMINICAN REPUBLIC', 'EAST TIMOR', 'ECUADOR', 'EGYPT', 'EL SALVADOR', 'EQUATORIAL GUINEA', 'ERITREA', 'ESTONIA', 'ESWATINI', 'ETHIOPIA', 'FIJI', 'FINLAND', 'FRANCE', 'GABON', 'THE GAMBIA', 'GEORGIA', 'GERMANY', 'GHANA', 'GREECE', 'GRENADA', 'GUATEMALA', 'GUINEA', 'GUINEA-BISSAU', 'GUYANA', 'HAITI', 'HONDURAS', 'HUNGARY', 'ICELAND', 'INDIA', 'INDONESIA', 'IRAN', 'IRAQ', 'IRELAND', 'ISRAEL', 'ITALY', 'JAMAICA', 'JAPAN', 'JORDAN', 'KAZAKHSTAN', 'KENYA', 'KIRIBATI', 'NORTH KOREA', 'SOUTH KOREA', 'KOSOVO', 'KUWAIT', 'KYRGYZSTAN', 'LAOS', 'LATVIA', 'LEBANON', 'LESOTHO', 'LIBERIA', 'LIBYA', 'LICHTENSTEIN', 'LITHUANIA', 'LUXEMBOURG', 'MADAGASCAR', 'MALAWI', 'MALAYSIA', 'MALDIVES', 'MALI', 'MALTA', 'MARSHALL ISLANDS', 'MAURITANIA', 'MAURITIUS', 'MEXICO', 'FEDERATED STATES OF MICRONESIA', 'MOLDOVA', 'MONACO', 'MONGOLIA', 'MONTENEGRO', 'MOROCCO', 'MOZAMBIQUE', 'MYANMAR', 'NAMIBIA', 'NAURU', 'NEPAL', 'NETHERLANDS', 'NEW ZEALAND', 'NICARAGUA', 'NIGER', 'NIGERIA', 'NORTH MACEDONIA', 'NORWAY', 'OMAN', 'PAKISTAN', 'PALAU', 'PANAMA', 'PAPUA NEW GUINEA', 'PARAGUAY', 'PERU', 'PHILIPPINES', 'POLAND', 'PORTUGAL', 'QATAR', 'ROMANIA', 'RUSSIA', 'RWANDA', 'SAINT KITTS AND NEVIS', 'SAINT LUCIA', 'SAINT VINCENT AND THE GRENADINES', 'SAMOA', 'SAN MARINO', 'SAO TOME AND PRINCIPE', 'SAUDI ARABIA', 'SENEGAL', 'SERBIA', 'SEYCHELLES', 'SIERRA LEONE', 'SINGAPORE', 'SLOVAKIA', 'SLOVENIA', 'SOLOMON ISLANDS', 'SOMALIA', 'SOUTH AFRICA', 'SPAIN', 'SRI LANKA', 'SUDAN', 'SOUTH SUDAN', 'SURINAME', 'SWEDEN', 'SWITZERLAND', 'SYRIA', 'TAIWAN', 'TAJIKISTAN', 'TANZANIA', 'THAILAND', 'TOGO', 'TONGA', 'TRINIDAD AND TOBAGO', 'TUNISIA', 'TURKEY', 'TURKMENISTAN', 'TUVALU', 'UGANDA', 'UKRAINE', 'UNITED ARAB EMIRATES', 'UNITED KINGDOM', 'UNITED STATES', 'URUGUAY', 'UZBEKISTAN', 'VANUATU', 'VATICAN CITY', 'VENEZUELA', 'VIETNAM', 'YEMEN', 'ZAMBIA', 'ZIMBABWE'
];