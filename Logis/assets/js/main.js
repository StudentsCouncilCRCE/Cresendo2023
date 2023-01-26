/**
* Template Name: Logis - v1.3.0
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});



// terminal//

document.addEventListener('DOMContentLoaded', function () {

  document.getElementsByTagName('form')[0].onsubmit = function (evt) {
      evt.preventDefault();
      checkWord();
      // window.scrollTo(0, 150);
  }

  document.getElementById('terminalTextInput').focus();

  var textInputValue = document.getElementById('terminalTextInput').value.trim();

  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

  var clearInput = function () {
      document.getElementById('terminalTextInput').value = "";
  }

  var scrollToBottomOfResults = function () {
      var terminalResultsDiv = document.getElementById('terminalReslutsCont');
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  scrollToBottomOfResults();

  var addTextToResults = function (textToAdd) {
      document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
      scrollToBottomOfResults();
  }

  var postHelpList = function () {
      var helpKeyWords = [
          "- Register + Hackathon / Mechathon / Elexathon (ex. register hackathon)",
          "- 'Time' will display the current time.",
          "- 'Date' will display the current date.",
          "* There are many easter eggs on this terminal, find and tag us on instagram for exciting perks ;)"
      ].join('<br>');
      addTextToResults(helpKeyWords);
  }

  var getTimeAndDate = function (postTimeDay) {
      var timeAndDate = new Date();
      var timeHours = timeAndDate.getHours();
      var timeMinutes = timeAndDate.getMinutes();
      var dateDay = timeAndDate.getDate();
      console.log(dateDay);
      var dateMonth = timeAndDate.getMonth() + 1;
      var dateYear = timeAndDate.getFullYear();

      if (timeHours < 10) {
          timeHours = "0" + timeHours;
      }

      if (timeMinutes < 10) {
          timeMinutes = "0" + timeMinutes;
      }

      var currentTime = timeHours + ":" + timeMinutes;
      var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

      if (postTimeDay == "time") {
          addTextToResults(currentTime);
      }
      if (postTimeDay == "date") {
          addTextToResults(currentDate);
      }
  }

  var openLinkInNewWindow = function (linkToOpen) {
      window.open(linkToOpen, '_blank');
      clearInput();
  }

  var textReplies = function () {
      switch (textInputValueLowerCase) {
          case "about":
              clearInput();
              addTextToResults("Crescendo 2023!");
              break;

          case "chris":
          case "chris gracias":
              clearInput();
              addTextToResults("My Creator");
              break;

          case "vignesh":
              clearInput();
              addTextToResults("My Creator");
              break;

          case "ecs":
              clearInput();
              addTextToResults("ECS ki mummy meri hojaye ~ Siddharth");
              break; 

          case "prod":
              clearInput();
              addTextToResults("hu ha hu ha we are production");
              break; 

          case "comps":
              clearInput();
              addTextToResults("Let's go COMPS");
              break;
              
          case "mech":
              clearInput();
              addTextToResults("Avaaj konacha , mechanical cha");
              break; 

          case "ivan":
              clearInput();
              addTextToResults("The Goat");
              break;

          case "i love you":
          case "love you":
          case "love":
              clearInput();
              addTextToResults("Aww! That's so sweet 😍. Here's some love for you too ❤ ❤ ❤ !");
              break;

          case "rick":
          case "rick roll":
          case "rickroll":
          case "do me a rickroll":
          case "fuck you":
              clearInput();
              addTextToResults(':)');
              openLinkInNewWindow('https://youtu.be/dQw4w9WgXcQ');
              break;

          case "hello":
          case "hi":
              clearInput();
              addTextToResults("Hey there user, Welcome to Crescendo 2023...💫.Type Help for more information ")
              break;

          case "time":
              clearInput();
              getTimeAndDate("time");
              break;

          case "date":
              clearInput();
              getTimeAndDate("date");
              break;

          case "help":
          case "?":
              clearInput();
              postHelpList();
              break;

          case "stuco rocks":
          case "stuco":
              clearInput();
              addTextToResults("STUCO ROCKS !!");
              break;

          default:
              clearInput();
              addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
              break;
      }
  }

  var checkWord = function () {
      textInputValue = document.getElementById('terminalTextInput').value.trim();
      textInputValueLowerCase = textInputValue.toLowerCase();

      if (textInputValue != "") {
          addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
          if (textInputValueLowerCase.substr(0, 9) == "register ") {
              openLinkInNewWindow('/register-' + textInputValueLowerCase.substr(9));
              addTextToResults("<i>The Registration link for " + "<b>" + textInputValue.substr(9) + "</b>" + " should be opened now.</i>");
          } else {
              textReplies();
          }
      }
  };

});















