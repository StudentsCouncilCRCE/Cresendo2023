function nav() {
    $('.nav-hide').css({
      'display': 'flex',
      'width': '6em',
      'text-align': 'center',
      'animation-name': 'transformer-button',
      'animation-duration': '2s',
      'animation-fill-mode': 'forwards'
    });
    $('#home').css('display', 'none');
    $('#port').css('display', 'none');
    $('#about').css('display', 'none');
    $('.hud-p-l').css('display', 'none');
    $('.hud-p-r').css('display', 'none');
    $('#contact').css('display', 'none');
  }
  
  function home() {
    $('.nav-hide').css('display', 'none');
    $('#home').css('display', 'block');
    $('#port').css('display', 'none');
    $('#about').css('display', 'none');
    $('#contact').css('display', 'none');
  }
  
  function port() {
    $('.nav-hide').css('display', 'none');
    $('#home').css('display', 'none');
    $('#port').css('display', 'inline');
    $('#about').css('display', 'none');
    $('#contact').css('display', 'none');
  }
  
  function about() {
    $('.nav-hide').css('display', 'none');
    $('#home').css('display', 'none');
    $('#port').css('display', 'none');
    $('#about').css('display', 'inline');
    $('.hud-p-l').css('display', 'block');
    $('.hud-p-r').css('display', 'block');
    $('#contact').css('display', 'none');
  }
  
  function contact() {
    $('.nav-hide').css('display', 'none');
    $('#home').css('display', 'none');
    $('#port').css('display', 'none');
    $('#about').css('display', 'none');
    $('#contact').css('display', 'inline');
  }
  $('.program').hover(
    function() {
      $('#nav-main').css('display', 'none');
      $('.lang-content').css('display', 'block');
    },
    function() {
      $('#nav-main').css('display', 'inline');
      $('.lang-content').css('display', 'none');
    }
  );
  var wave = $('.lang-content').css({
    'animation-name': 'transformer-menu',
    'animation-duration': '2s',
    'animation-fill-mode': 'forwards'
  });
  var audio = $("audio")[0];
  $('#HTML5').hover(
    function() {
      $('.lang-content').html('HTML 5');
      audio.play();
      $wave;
    }
  );
  $('#CSS3').hover(
    function(){
      $('.lang-content').html('CSS3');
      audio.play();
    }
  )
  $('#JS').hover(
    function() {
      $('.lang-content').html('JavaScript');
      audio.play();
    }
  );
  $('#XML').hover(
    function() {
      $('.lang-content').html('XML');
      audio.play();
    }
  );
  $('#AJAX').hover(
    function() {
      $('.lang-content').html('AJAX');
      audio.play();
    }
  );
  $('#JSON').hover(
    function() {
      $('.lang-content').html('JavaScript Object Notation');
      audio.play();
    }
  );
  $('#jQuery').hover(
    function() {
      $('.lang-content').html('jQuery');
      audio.play();
    }
  );
  $('#BS3').hover(
    function() {
      $('.lang-content').html('Bootstrap v3  & v 4');
      audio.play();
    }
  );
  $('#Ang').hover(
    function() {
      $('.lang-content').html('Angular');
      audio.play();
    }
  );
  $('#Git').hover(
    function() {
      $('.lang-content').html('Git and Github');
      audio.play();
    }
  );
  $('#Ruby').hover(
    function() {
      $('.lang-content').html('Ruby');
      audio.play();
    }
  );
  $('#RoR').hover(
    function() {
      $('.lang-content').html('Ruby on Rails');
      audio.play();
    }
  );
  $('#HAML').hover(
    function() {
      $('.lang-content').html('HAML');
      audio.play();
    }
  );
  $('#RSPEC').hover(
    function() {
      $('.lang-content').html('RSPEC');
      audio.play();
    }
  );
  $('#Python').hover(
    function() {
      $('.lang-content').html('Python');
      audio.play();
    }
  );
  $('#CSharp').hover(
    function() {
      $('.lang-content').html('C#');
      audio.play();
    }
  );
  $('#Cplusplus').hover(
    function() {
      $('.lang-content').html('C++');
      audio.play();
    }
  );
  
  
  const dynamicText = document.getElementById("dynamic-text");
const cursor = document.querySelector(".cursor");
const words = [" THE TECHNICAL FEST", "A FLAGSHIP EVENT", " CRCE", " CRESCENDO 2023", " A JOURNEY"];
const colors = [
  "#FF3855",
  "#FA5B3D",
  "#FFAA1D",
  "#299617",
  "#2243B6",
  "#9C51B6",
  "#FF7A00", 
  "#FFDB00",
  "#0048BA",
  "#FF007C"
];

let charIndex = 0;
let wordIndex = 0;
let erasingTime = getRandomTime(150, 200);
let typingTime = getRandomTime(250, 350);
const newWordTime = 1800; //time before starting to write new word
const finishedWordTime = 2000; //time before starting to erase word

function type() {
  if (charIndex >= words[wordIndex].length) {
    cursor.classList.remove("blinking"); //remove the blinking of the cursor while erasing
    dynamicText.textContent = dynamicText.textContent.slice(
      0,
      dynamicText.textContent.length - 1
    );
    if (dynamicText.textContent.length === 0) {
      charIndex = 0;
      wordIndex++;
    }
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    time = charIndex === 0 ? newWordTime : erasingTime; // if finished erasing word time is 1.8s, else is erasing time
    if (time === newWordTime) cursor.classList.add("blinking"); //if finished erasing word, cursor starts blinking
    setTimeout(type, time);
  } else {
    cursor.classList.remove("blinking"); //remove blinking of cursor if typing
    if (charIndex === 0) dynamicText.style.color = getRandomColor(); //if at start of the word, get new color
    dynamicText.textContent += words[wordIndex][charIndex];
    charIndex++;
    time = charIndex >= words[wordIndex].length ? finishedWordTime : typingTime;// if finished typing word time is 2s, else is typing time
    if (time === finishedWordTime) cursor.classList.add("blinking");// if finished typing word, cursor start blinking
    setTimeout(type, time);
  }
}

function getRandomTime(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  let max = colors.length - 1;
  let min = 0;
  return colors[Math.round(Math.random() * (max - min) + min)];
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 2000);
});
