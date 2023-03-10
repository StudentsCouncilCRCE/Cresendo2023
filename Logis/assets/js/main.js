/**
 * Template Name: Logis - v1.3.0
 * Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */

  // const preloader = document.querySelector('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove();
  //   });
  // }

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100 ? selectHeader.classList.add("sticked") : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener("click", window.scrollTo({
        top: 0,
        behavior: "smooth",
      }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});

// terminal//

document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByTagName("form")[0].onsubmit = function (evt) {
    evt.preventDefault();
    checkWord();
    // window.scrollTo(0, 150);
  };

  // document.getElementById('terminalTextInput').focus();

  var textInputValue = document
    .getElementById("terminalTextInput")
    .value.trim();

  var textResultsValue = document.getElementById(
    "terminalReslutsCont"
  ).innerHTML;

  var clearInput = function () {
    document.getElementById("terminalTextInput").value = "";
  };

  var scrollToBottomOfResults = function () {
    var terminalResultsDiv = document.getElementById("terminalReslutsCont");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  };

  scrollToBottomOfResults();

  var addTextToResults = function (textToAdd) {
    document.getElementById("terminalReslutsCont").innerHTML +=
      "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  };

  var postHelpList = function () {
    var helpKeyWords = [
      // "- Register + Hackathon / Mechathon / Elexathon ",
      // "- 'Time'Live time",
      // "- 'Date' ",
      "Welcome User ",
      "Type the number corresponding to the question to know more",
      "1) What is Crescendo?",
      "2) Is it an inter-college Event?",
      "3) What is the location of the events? ",
      "4) When is Crescendo?",
      "5) Are the Events Paid?",
      "6) Where to register?",
      "7) Will it be fun?",
      "* There are many easter eggs on this terminal, find,tag and follow us on Instagram at @frcrce_official ;",
    ].join("<br>");
    addTextToResults(helpKeyWords);
  };

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
  };

  var openLinkInNewWindow = function (linkToOpen) {
    window.open(linkToOpen, "_blank");
    clearInput();
  };

  var textReplies = function () {
    switch (textInputValueLowerCase) {
      case "1":
        clearInput();
        addTextToResults(
          "Crescendo is the annual technical festival of Fr. Conceicao Rodrigues College of Engineering. It is an inter college event with events ranging from Hackathon, Mechathon, Elexathon to Coding Competitions, Entrepreneurship, etc."
        );

        break;

      case "2":
        clearInput();
        addTextToResults(
          "Yes, Crescendo is an inter-collegiate event....Get your friends along! "
        );
        break;

      case "3":
        clearInput();
        addTextToResults(
          "Different events have different venues, you will be notified about your venues in the event brochure!"
        );
        break;

      case "4":
        clearInput();
        addTextToResults(
          "The Technical Amalgamation - CRESCENDO is spanned over 4 days, 9th March to 12th March"
        );
        break;

      case "5":
        clearInput();
        addTextToResults(
          "Yes, the events do have a registeration fee of nominal cost"
        );
        break;

      case "6":
        clearInput();
        addTextToResults(
          "Register for any event right here on the amazing website :)"
        );
        break;

      case "7":
        clearInput();
        addTextToResults(
          " Come along with your Kaleidoscopes and watch out for yourselves!"
        );
        break;

      // case "tanuj":
      // case "Tanuj":
      // clearInput();
      // addTextToResults(" if girl==true  contact :7700007543 else contact type renu ");
      // break;

      case "farhan":
      case "Farhan":
        clearInput();
        addTextToResults("Tuta hua saaz hu mein");
        break;

      case "vignesh":
      case "Vignesh":
        clearInput();
        addTextToResults("Webmaster OP");
        break;



      case "Harsh":
      case "harsh":
            clearInput();
            addTextToResults("Stuco Webteam ???????????????");
            break;


      case "Seanne":
      case "seanne":
            clearInput();
            addTextToResults("Stuco Webteam ???????????????");
            break;


      case "Khushi":
      case "Khushi":
            clearInput();
            addTextToResults("Stuco Webteam ???????????????");
             break;

      case "chris":
      case "chris gracias":
        clearInput();
        addTextToResults(" SE Webmaster op");
        break;

      case "ecs":
        clearInput();
        addTextToResults(" Go ECS");
        break;

      case "prod":
        clearInput();
        addTextToResults("hu ha hu ha we are production");
        break;

      case "comps":
        clearInput();
        addTextToResults("Let's go COMPS");
        break;

      case "aids":
        clearInput();
        addTextToResults("Let's go AI");
        break;

      case "dates":
        clearInput();
        addTextToResults("9th March - 12th March");
        break;

      case "mech":
        clearInput();
        addTextToResults("Avaaj konacha , mechanical cha");
        break;

      case "elexathon":
        clearInput();
        addTextToResults(" Visit the Event card");
        break;

      case "mechathon":
        clearInput();
        addTextToResults(" Visit the Event card");
        break;

      case "hackathon":
        clearInput();
        addTextToResults(" Visit the Event card ");
        break;

      case "ivan":
        clearInput();
        addTextToResults("G.O.A.T");
        break;
      case "rianna":
      case "Rianna":
        clearInput();
        addTextToResults("Crescendo ka grid maine banaya");
        break;

      case "ryan":
        clearInput();
        addTextToResults("G.O.A.T ULTRA PRO MAX ???? ");
        break;

      case "i love you":
      case "love you":
      case "love":
        clearInput();
        addTextToResults(
          "Aww! That's so sweet ????. Here's some love for you too ??? ??? ??? !"
        );
        break;

      case "rick":
      case "rick roll":
      case "rickroll":
      case "do me a rickroll":
        clearInput();
        addTextToResults(":)");
        openLinkInNewWindow("https://youtu.be/dQw4w9WgXcQ");
        break;

      case "hello":
      case "hi":
        clearInput();
        addTextToResults(
          "Hey there user, Welcome to Crescendo 2023...????.Type Help for more information  "
        );
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

      case "ishan":
        clearInput();
        addTextToResults("hello");
        break;

      case "reflection":
      case "REFLECTION":
        clearInput();
        addTextToResults(
          " Congratulations you just found an Easter egg, tag us on instagram  @frcrce to get reposted  "
        );
        break;

      case "mirror":
      case "MIRROR":
        clearInput();
        addTextToResults(
          " Congratulations you just found an Easter egg, tag us on instagram  @frcrce to get reposted  "
        );
        break;

      case "symmetry":
      case "SYMMETRY":
        clearInput();
        addTextToResults(
          " Congratulations you just found an Easter egg, tag us on instagram  @frcrce to get reposted  "
        );
        break;

      case "kaleidoscope":
      case "KALEIDOSCOPE":
        clearInput();
        addTextToResults(
          " Congratulations you just found an Easter egg, tag us on instagram  @frcrce to get reposted  "
        );
        break;

      case "glass":
      case "GLASS":
        clearInput();
        addTextToResults(
          " Congratulations you just found an Easter egg, tag us on instagram  @frcrce to get reposted  "
        );
        break;

      case "dhruvi":
        clearInput();
        addTextToResults(" CRMD - THE BEST LITERARY EVENT OF STUCO ");
        break;

      case "tanuj":
      case "Tanuj":
        clearInput();
        addTextToResults("DESIGN HEAD ");
        break;

      case "Sahil":
      case "sahil":
        clearInput();
        addTextToResults(" BHAI");
        break;

      case "Renu":
      case "renu":
        clearInput();
        addTextToResults(" TEDxCRCE WALE LOG  ");
        break;

      case "Samuel ":
      case "samuel":
        clearInput();
        addTextToResults(" CULT SEC ");
        break;

      case "Anthony":
      case "anthony":
        clearInput();
        addTextToResults(" The GEN SEC of CRCE ");
        break;

      case "Jeshu":
      case "jeshu":
        clearInput();
        addTextToResults(" King ");
        break;

      case "Sahil ":
      case " sahil":
        clearInput();
        addTextToResults(" BHAI ");
        break;

      case "Gaurav ":
      case " gaurav":
        clearInput();
        addTextToResults("  SE REP ");
        break;

      case "Riya ":
      case "riya":
        clearInput();
        addTextToResults(" I am everything u want but cant have ");
        break;

      case "fuck you":
        clearInput();
        addTextToResults(" JO BOLTE WAHI HOTE");
        break;

      default:
        clearInput();
        addTextToResults(
          "<p><i>The command  " +
            "<b>" +
            textInputValue +
            "</b>" +
            " was not found . Type <b>Help</b> to see all commands.</i></p>"
        );
        break;
    }
  };

  var checkWord = function () {
    textInputValue = document.getElementById("terminalTextInput").value.trim();
    textInputValueLowerCase = textInputValue.toLowerCase();

    if (textInputValue != "") {
      addTextToResults(
        "<p class='userEnteredText'>> " + textInputValue + "</p>"
      );
      if (textInputValueLowerCase.substr(0, 9) == "register ") {
        openLinkInNewWindow("/register-" + textInputValueLowerCase.substr(9));
        addTextToResults(
          "<i>The Registration link for " +
            "<b>" +
            textInputValue.substr(9) +
            "</b>" +
            " should be opened now.</i>"
        );
      } else {
        textReplies();
      }
    }
  };
});

// // Set up the scene
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // Create the kaleidoscope geometry
// var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

// // Create a material to give the kaleidoscope a reflective surface
// var material = new THREE.MeshStandardMaterial( {
//     color: 0xff0051,
//     metalness: 1,
//     roughness: 0
// } );

// // Create the kaleidoscope mesh and add it to the scene
// var mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );

// // Add a light to the scene
// var light = new THREE.DirectionalLight( 0xffffff, 1 );
// light.position.set( 1, 1, 1 );
// scene.add( light );

// // Create a kaleidoscope effect by duplicating the mesh and reflecting it across the x and y axes
// var kaleidoscope = new THREE.Group();
// for (var i = 0; i < 4; i++) {
//     var reflectedMesh = mesh.clone();
//     reflectedMesh.position.x = (i % 2 === 0) ? -mesh.position.x : mesh.position.x;
//     reflectedMesh.position.y = (i < 2) ? -mesh.position.y : mesh.position.y;
//     kaleidoscope.add(reflectedMesh);
// }
// scene.add(kaleidoscope);

// // Set the camera position
// camera.position.z = 30;

// // Render the scene
// renderer.render( scene, camera );
