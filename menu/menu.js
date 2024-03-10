function Sun(sunId) {
  let sun = document.getElementById(sunId);
  sun.classList.remove("sun_anime_reverse");
  sun.classList.add("sun_anime");
}
function Cloud(cloudId) {
  let cloud = document.getElementById(cloudId);
  cloud.classList.remove("cloud_anime_reverse");
  cloud.classList.add("cloud_anime");
}
function Day(dayId) {
  let day = document.getElementById(dayId);
  day.classList.remove("day_anime_reverse");
  day.classList.add("day_anime");
}

function Night(nightId) {
  let night = document.getElementById(nightId);
  night.classList.remove("night_anime_reverse");
  night.classList.add("night_anime");
}
function Moon(moonId) {
  let moon = document.getElementById(moonId);
  moon.classList.remove("moon_anime_reverse");
  moon.classList.add("moon_anime");
}
function Photo_Day(photo1Id) {
  let photo1 = document.getElementById(photo1Id);
  photo1.classList.remove("container_day");
  photo1.classList.add("container_night");
}
function Button1_day(button1Id) {
  let button1 = document.getElementById(button1Id);
  button1.classList.remove("button1_day");
  button1.classList.add("button1_night");
}
function Button2_day(button2Id) {
  let button2 = document.getElementById(button2Id);
  button2.classList.remove("button2_day");
  button2.classList.add("button2_night");
}
function Button3_day(button3Id) {
  let button3 = document.getElementById(button3Id);
  button3.classList.remove("button3_day");
  button3.classList.add("button3_night");
}
function Button4_day(button4Id) {
  let button4 = document.getElementById(button4Id);
  button4.classList.remove("button4_day");
  button4.classList.add("button4_night");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function Moon_reverse(moonId) {
  let moon = document.getElementById(moonId);
  moon.classList.remove("moon_anime");
  moon.classList.add("moon_anime_reverse");
}
function Night_reverse(nightId) {
  let night = document.getElementById(nightId);
  night.classList.remove("night_anime");
  night.classList.add("night_anime_reverse");
}
function Day_reverse(dayId) {
  let day = document.getElementById(dayId);
  day.classList.remove("day_anime");
  day.classList.add("day_anime_reverse");
}
function Cloud_reverse(cloudId) {
  let cloud = document.getElementById(cloudId);
  cloud.classList.remove("cloud_anime");
  cloud.classList.add("cloud_anime_reverse");
}
function Sun_reverse(sunId) {
  let sun = document.getElementById(sunId);
  sun.classList.remove("sun_anime");
  sun.classList.add("sun_anime_reverse");
}
function Photo_Night(photo1Id) {
  let photo1 = document.getElementById(photo1Id);
  photo1.classList.remove("container_night");
  photo1.classList.add("container_day");
}
function Button1_night(button1Id) {
  let button1 = document.getElementById(button1Id);
  button1.classList.remove("button1_night");
  button1.classList.add("button1_day");
}
function Button2_night(button2Id) {
  let button2 = document.getElementById(button2Id);
  button2.classList.remove("button2_night");
  button2.classList.add("button2_day");
}
function Button3_night(button3Id) {
  let button3 = document.getElementById(button3Id);
  button3.classList.remove("button3_night");
  button3.classList.add("button3_day");
}
function Button4_night(button4Id) {
  let button4 = document.getElementById(button4Id);
  button4.classList.remove("button4_night");
  button4.classList.add("button4_day");
}
let isTrue = true;

function Check_day() {
  let display_day = document.getElementById("Day");
  setTimeout(function () {
    display_day.style.display = "none";
  }, 200);
  let display_night = document.getElementById("Night");
  setTimeout(function () {
    display_night.style.display = "block";
  }, 200);

  Sun("Sun");
  Cloud("Cloud");
  Day("Day");
  Night("Night");
  Moon("Moon");
  Photo_Day("Photo_day");
  Button1_day("Button_1");
  Button2_day("Button_2");
  Button3_day("Button_3");
  Button4_day("Button_4");
  Settings_night("Settings");
  Colors_night("Color");
  Customise_night("Customise");
  Input_Day("button_words_night");
  Language_night("language");
  Glob_day("Glob");
  Question_mark_day("Rules");
}
function Check_night() {
  let display_day = document.getElementById("Day");
  setTimeout(function () {
    display_day.style.display = "block";
  }, 200);
  let display_night = document.getElementById("Night");
  setTimeout(function () {
    display_night.style.display = "none";
  }, 200);
  Moon_reverse("Moon");
  Night_reverse("Night");
  Day_reverse("Day");
  Cloud_reverse("Cloud");
  Sun_reverse("Sun");
  Photo_Night("Photo_day");
  Button1_night("Button_1");
  Button2_night("Button_2");
  Button3_night("Button_3");
  Button4_night("Button_4");
  Settings_day("Settings");
  Colors_day("Color");
  Customise_day("Customise");
  Input_Night("button_words_day");
  Language_day("language");
  Glob_night("Glob");
  Question_mark_night("Rules");
}

let audio = document.getElementById("Sound");

function Sound() {
  let audio = document.getElementById("Sound");
  audio.play();
}
function Sound1() {
  let audio = document.getElementById("Sound1");
  audio.play();
}
function Sound2() {
  let audio = document.getElementById("Sound2");
  audio.play();
}
function Sound3() {
  let audio = document.getElementById("Sound3");
  audio.play();
}

function Settings() {
  let set = document.getElementById("Buttons");
  let set_new = document.getElementById("Settings");
  set.style.display = "none";
  set_new.style.display = "flex";
}
function Settings_back() {
  let back = document.getElementById("Settings");
  let back_new = document.getElementById("Buttons");
  back.style.display = "none";
  back_new.style.display = "block";
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    Settings_back();
    Sound_back();
    Customise_back();
  }
});
function Sound_enter() {
  let audio = document.getElementById("Sound_enter");
  audio.play();
}
function Sound_back() {
  let audio = document.getElementById("Sound_back");
  audio.play();
}

/////////////////////SOUND//////////////

document.addEventListener("DOMContentLoaded", function () {
  let circle = document.getElementById("Circle");
  let isDragging = false;

  let startPositionX;
  let currentPositionX;

  circle.addEventListener("mousedown", function (event) {
    isDragging = true;
    startPositionX = event.clientX;
    currentPositionX = parseInt(circle.style.left) || 0;
  });

  document.addEventListener("mousemove", function (event) {
    if (isDragging) {
      let diffX = event.clientX - startPositionX;
      let steps = Math.round(diffX / 42);
      let newX = Math.min(420, Math.max(0, currentPositionX + steps * 42));
      circle.style.left = newX + "px";

      let sound_1 = document.getElementById("Set_1_on");
      let sound_2 = document.getElementById("Set_2_on");
      let sound_3 = document.getElementById("Set_3_on");
      let sound_4 = document.getElementById("Set_4_on");

      let sound_1_off = document.getElementById("Set_1_off");
      let sound_2_off = document.getElementById("Set_2_off");
      let sound_3_off = document.getElementById("Set_3_off");
      let sound_4_off = document.getElementById("Set_4_off");

      if (
        sound_1.style.display === "none" &&
        sound_2.style.display === "none" &&
        sound_3.style.display === "none" &&
        sound_4.style.display === "none"
      ) {
        if (newX === 0) {
          sound_1_off.style.display = "flex";
          sound_2_off.style.display = "none";
          sound_3_off.style.display = "none";
          sound_4_off.style.display = "none";
        } else if (42 <= newX && newX <= 126) {
          sound_1_off.style.display = "none";
          sound_2_off.style.display = "flex";
          sound_3_off.style.display = "none";
          sound_4_off.style.display = "none";
        } else if (168 <= newX && newX <= 294) {
          sound_1_off.style.display = "none";
          sound_2_off.style.display = "none";
          sound_3_off.style.display = "flex";
          sound_4_off.style.display = "none";
        } else if (336 <= newX && newX <= 420) {
          sound_1_off.style.display = "none";
          sound_2_off.style.display = "none";
          sound_3_off.style.display = "none";
          sound_4_off.style.display = "flex";
        }
      } else {
        if (newX === 0) {
          sound_1.style.display = "flex";
          sound_2.style.display = "none";
          sound_3.style.display = "none";
          sound_4.style.display = "none";
        } else if (42 <= newX && newX <= 126) {
          sound_1.style.display = "none";
          sound_2.style.display = "flex";
          sound_3.style.display = "none";
          sound_4.style.display = "none";
        } else if (168 <= newX && newX <= 294) {
          sound_1.style.display = "none";
          sound_2.style.display = "none";
          sound_3.style.display = "flex";
          sound_4.style.display = "none";
        } else if (336 <= newX && newX <= 420) {
          sound_1.style.display = "none";
          sound_2.style.display = "none";
          sound_3.style.display = "none";
          sound_4.style.display = "flex";
        }
      }
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
});

///////////////////Бордер налаштувань////////////////////////////

function Settings_day() {
  let set = document.getElementById("Settings_bord");
  set.classList.remove("container_sittings_night");
  set.classList.add("container_sittings_day");
}
function Settings_night() {
  let set = document.getElementById("Settings_bord");
  set.classList.remove("container_sittings_day");
  set.classList.add("container_sittings_night");
}

///////Кольори звуку///////////////

let colors_night = [
  "#E2BDFF",
  "#D7A6FE",
  "#CC8BFF",
  "#BE6AFF",
  "#B04BFF",
  "#A028FF",
  "#9311F9",
  "#8300EA",
  "#7300CE",
  "#6700B7",
];
function Colors_night() {
  let elements = document.getElementsByClassName("block1_day");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = colors_night[i];
  }
}

let colors_day = [
  "#22ff00",
  "#95ff00",
  "#b7ff00",
  "#d4ff00",
  "#eaff00",
  "#ffbf00",
  "#ff9500",
  "#ff6f00",
  "#ff4800",
  "#ff0000",
];

function Colors_day() {
  let elements = document.getElementsByClassName("block1_day");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = colors_day[i];
  }
}

function Set_1_on() {
  let set = document.getElementById("Set_1_off");
  let new_set = document.getElementById("Set_1_on");
  set.style.display = "none";
  new_set.style.display = "flex";
}
function Set_1_off() {
  let set = document.getElementById("Set_1_off");
  let new_set = document.getElementById("Set_1_on");
  new_set.style.display = "none";
  set.style.display = "flex";
}
function Set_2_on() {
  let set = document.getElementById("Set_2_off");
  let new_set = document.getElementById("Set_2_on");
  set.style.display = "none";
  new_set.style.display = "flex";
}
function Set_2_off() {
  let set = document.getElementById("Set_2_off");
  let new_set = document.getElementById("Set_2_on");
  new_set.style.display = "none";
  set.style.display = "flex";
}
function Set_3_on() {
  let set = document.getElementById("Set_3_off");
  let new_set = document.getElementById("Set_3_on");
  set.style.display = "none";
  new_set.style.display = "flex";
}
function Set_3_off() {
  let set = document.getElementById("Set_3_off");
  let new_set = document.getElementById("Set_3_on");
  new_set.style.display = "none";
  set.style.display = "flex";
}
function Set_4_on() {
  let set = document.getElementById("Set_4_off");
  let new_set = document.getElementById("Set_4_on");
  set.style.display = "none";
  new_set.style.display = "flex";
}
function Set_4_off() {
  let set = document.getElementById("Set_4_off");
  let new_set = document.getElementById("Set_4_on");
  new_set.style.display = "none";
  set.style.display = "flex";
}

function Customise() {
  let cust = document.getElementById("Customise");
  let but = document.getElementById("Buttons");
  cust.style.display = "flex";
  but.style.display = "none";
}
function Customise_back() {
  let cust = document.getElementById("Customise");
  let but = document.getElementById("Buttons");
  cust.style.display = "none";
  but.style.display = "block";
}
function Customise_day() {
  let day = document.getElementById("Customise");
  day.classList.remove("container_customise_night");
  day.classList.add("container_customise_day");
}
function Customise_night() {
  let day = document.getElementById("Customise");
  day.classList.remove("container_customise_day");
  day.classList.add("container_customise_night");
}

function Input() {
  let inputs = document.querySelectorAll(
    ".button_words_day, .button_words_night"
  ); // Отримати всі input-поля з класом button_words

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("keypress", function (event) {
      let currentChar = event.key;
      if (/^[A-Z\d !"#$%&'()*+,-./:;<=>?@[\\\]^_{|}~]$/i.test(currentChar)) {
        input.value = "";
        input.value = currentChar.toUpperCase();
      } else {
        input.value = "";
      }

      event.preventDefault();
    });
  }
}

function Input_Day() {
  let inputs = document.getElementsByClassName("button_words_day");
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.style.color = "#BE6AFF";
  }
}
function Input_Night() {
  let inputs = document.getElementsByClassName("button_words_day");
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.style.color = "#ff9500";
  }
}

//МОВИ//
function Language() {
  let lang = document.getElementById("language");
  let cont = document.getElementById("Settings");
  cont.style.marginLeft = "11.85%";
  lang.style.display = "flex";
}

function Language_none() {
  let lang = document.getElementById("language");
  let cont = document.getElementById("Settings");
  cont.style.marginLeft = "0";
  lang.style.display = "none";
}

let isLanguage = true;

function Close_language() {
  let lang = document.getElementById("language");
  let cont = document.getElementById("Settings");
  lang.style.display = "none";
  cont.style.marginLeft = "0";
  isLanguage = !isLanguage;
}
document.addEventListener("keydown", function (event) {
  let check = document.getElementById("language");
  if (check.style.display != "none") {
    if (event.key === "Escape") {
      Close_language();
    }
  }
});

function Check_language() {
  if (isLanguage) {
    Language();
  } else {
    Language_none();
  }
  isLanguage = !isLanguage;
}
function Language_night() {
  let lang = document.getElementById("language");
  lang.style.backgroundColor = "#383838";
}
function Language_day() {
  let lang = document.getElementById("language");
  lang.style.backgroundColor = "#7c7c7c";
}
function Glob_day() {
  let globe = document.getElementById("Glob");
  globe.src = "./photo/globe_night.png";
}
function Glob_night() {
  let globe = document.getElementById("Glob");
  globe.src = "./photo/globe.png";
}
function Question_mark_day() {
  let mark = document.getElementById("Rules");
  mark.classList.remove("rules_day");
  mark.classList.add("rules_night");
}
function Question_mark_night() {
  let mark = document.getElementById("Rules");
  mark.classList.remove("rules_night");
  mark.classList.add("rules_day");
}
function Rules_back() {
  let but = document.getElementById("Buttons");
  let rules = document.querySelectorAll(".container_rules");
  but.style.display = "block";
  rules.forEach((rule) => {
    rule.style.display = "none";
  });
}

document.addEventListener("keydown", function (event) {
  let rules = document.querySelectorAll(".container_rules");
  rules.forEach((rule) => {
    if (rule.style.display !== "none") {
      if (event.key === "Escape") {
        Rules_back();
      }
    }
  });
});

function Enter_rules() {
  let rules = document.getElementById("Container_rules1");
  let but = document.getElementById("Buttons");
  let set = document.getElementById("Settings");
  let cust = document.getElementById("Customise");
  set.style.display = "none";
  cust.style.display = "none";
  but.style.display = "none";
  rules.style.display = "flex";
}

///buttons_rules///
function Rules_right_1() {
  let page1 = document.getElementById("Container_rules1");
  let page2 = document.getElementById("Container_rules2");
  page1.style.display = "none";
  page2.style.display = "flex";
}
function Rules_left_1() {
  let page1 = document.getElementById("Container_rules1");
  let page2 = document.getElementById("Container_rules2");
  page1.style.display = "flex";
  page2.style.display = "none";
}
function Rules_right_2() {
  let page2 = document.getElementById("Container_rules2");
  let page3 = document.getElementById("Container_rules3");
  page2.style.display = "none";
  page3.style.display = "flex";
}
function Rules_left_2() {
  let page2 = document.getElementById("Container_rules2");
  let page3 = document.getElementById("Container_rules3");
  page2.style.display = "flex";
  page3.style.display = "none";
}
function Rules_right_3() {
  let page3 = document.getElementById("Container_rules3");
  let page4 = document.getElementById("Container_rules4");
  page3.style.display = "none";
  page4.style.display = "flex";
}
function Rules_left_3() {
  let page3 = document.getElementById("Container_rules3");
  let page4 = document.getElementById("Container_rules4");
  page3.style.display = "flex";
  page4.style.display = "none";
}
