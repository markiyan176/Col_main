const translations = {
  span: {
    "Single t": "Soltero",
    "Local t": "Local",
    "Customise t": "Personalizar",
    "Settings t": "Ajustes",
    //Customise
    "Choose body": "Elegir cuerpo",
    "Choose gun": "Elegir arma",
    //Settings
    "For code": "Para el codigo",
    "For shooting": "Para disparar",
    "Choose line up": "Elegir alineacion",
    "Choose line L": "Elegir la linea L",
    "Choose line down": "Elegir linea abajo",
    "Choose line R": "Elegir la linea R",
    "Shoot t": "Disparar",
    "Shoot enemy": "Disparar al enemigo",
    "English t": "English",
    "Spanish t": "Espanola",
    "Polish t": "Polski",
  },
  pl: {
    "Single t": "Pojedynczy",
    "Local t": "Lokalny",
    "Customise t": "Dostosowac",
    "Settings t": "Ustawienia",
    //Customise
    "Choose body": "Wybierz cialo",
    "Choose gun": "Wybierz bron",
    //Settings
    "For code": "Dla kodu",
    "For shooting": "Dla strzelania",
    "Choose line up": "Wybierz kolejke w gore",
    "Choose line L": "Wybierz kolejke L",
    "Choose line down": "Wybierz kolejke w dol",
    "Choose line R": "Wybierz kolejke R",
    "Shoot t": "Strzelac",
    "Shoot enemy": "Strzelac w wroga",
    "English t": "English",
    "Spanish t": "Espanola",
    "Polish t": "Polski",
  },
  en: {
    "Single t": "Single",
    "Local t": "Local",
    "Customise t": "Customise",
    "Settings t": "Settings",
    //Customise
    "Choose body": "Choose body",
    "Choose gun": "Choose gun",
    //Settings
    "For code": "For code",
    "For shooting": "For shooting",
    "Choose line up": "Choose line up",
    "Choose line L": "Choose line L",
    "Choose line down": "Choose line down",
    "Choose line R": "Choose line R",
    "Shoot t": "Shoot",
    "Shoot enemy": "Shoot enemy",
    "English t": "English",
    "Spanish t": "Espanola",
    "Polish t": "Polski",
  },
};

let currentLanguage = "en";

window.addEventListener("load", () => {
  document.getElementById("Eng").addEventListener("click", function () {
    currentLanguage = "en";
    const elems = document.getElementsByClassName("translate");
    for (const elem of elems) {
      const text = translations[currentLanguage][elem.getAttribute("langKey")];
      elem.innerText = text;
    }
  });

  document.getElementById("Span").addEventListener("click", function () {
    currentLanguage = "span";
    const elems = document.getElementsByClassName("translate");
    for (const elem of elems) {
      const text = translations[currentLanguage][elem.getAttribute("langKey")];
      elem.innerText = text;
    }
  });

  document.getElementById("Pol").addEventListener("click", function () {
    currentLanguage = "pl";
    const elems = document.getElementsByClassName("translate");
    for (const elem of elems) {
      const text = translations[currentLanguage][elem.getAttribute("langKey")];
      elem.innerText = text;
    }
  });
});

function Default_FontSize(element) {
  if (!element.dataset.defaultFontSize) {
    element.dataset.defaultFontSize = window
      .getComputedStyle(element)
      .getPropertyValue("font-size");
  }
}

function Fontsize_Pol() {
  let elements = document.querySelectorAll(
    ".translate:not(.language_text):not(.button1_day):not(.button2_day):not(.button3_day):not(.button4_day):not(.button1_night):not(.button2_night):not(.button3_night):not(.button4_night)"
  );
  elements.forEach((element) => {
    Default_FontSize(element);
    element.style.fontSize =
      parseInt(element.dataset.defaultFontSize) * 0.75 + "px";
  });
}

function Fontsize_Span() {
  let elements = document.querySelectorAll(
    ".translate:not(.language_text):not(.button1_day):not(.button2_day):not(.button3_day):not(.button4_day):not(.button1_night):not(.button2_night):not(.button3_night):not(.button4_night)"
  );
  elements.forEach((element) => {
    Default_FontSize(element);
    element.style.fontSize =
      parseInt(element.dataset.defaultFontSize) * 0.9 + "px";
  });
}

function Fontsize_Eng() {
  let elements = document.querySelectorAll(".translate");
  elements.forEach((element) => {
    Default_FontSize(element);
    element.style.fontSize = element.dataset.defaultFontSize;
  });
}
