(function () {
  "use strict";

  var carousel = document.getElementsByClassName("carousel")[0],
    slider = carousel.getElementsByClassName("carousel__slider")[0],
    items = carousel.getElementsByClassName("carousel__slider__item"),
    prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
    nextBtn = carousel.getElementsByClassName("carousel__next")[0];

  var width,
    height,
    totalWidth,
    margin = 20,
    currIndex = 0,
    interval,
    intervalTime = 8000;

  function init() {
    resize();
    move(Math.floor(items.length / 2));
    bindEvents();

    timer();
  }

  function resize() {
    (width = Math.max(window.innerWidth * 0.25, 275)),
      (height = window.innerHeight * 0.5),
      (totalWidth = width * items.length);

    slider.style.width = totalWidth + "px";

    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      item.style.width = width - margin * 2 + "px";
      item.style.height = height + "px";
    }
  }

  function move(index) {
    if (index < 1) index = items.length;
    if (index > items.length) index = 1;
    currIndex = index;

    for (var i = 0; i < items.length; i++) {
      let item = items[i],
        box = item.getElementsByClassName("item__3d-frame")[0];
      if (i == index - 1) {
        item.classList.add("carousel__slider__item--active");
        box.style.transform = "perspective(1200px)";
      } else {
        item.classList.remove("carousel__slider__item--active");
        box.style.transform =
          "perspective(1200px) rotateY(" +
          (i < index - 1 ? 40 : -40) +
          "deg)";
      }
    }

    slider.style.transform =
      "translate3d(" +
      (index * -width + width / 2 + window.innerWidth / 2) +
      "px, 0, 0)";
  }

  function timer() {
    clearInterval(interval);
    interval = setInterval(() => {
      move(++currIndex);
    }, intervalTime);
  }

  function prev() {
    move(--currIndex);
    timer();
  }

  function next() {
    move(++currIndex);
    timer();
  }

  function bindEvents() {
    window.onresize = resize;
    prevBtn.addEventListener("click", () => {
      prev();
    });
    nextBtn.addEventListener("click", () => {
      next();
    });
  }

  init();
})();

// jquery moda


var post = [
  {
    postTitle: "LED (Light Emmiting Diode)",
    postContent: "<h3>Wat doet het?</h3><p>Als er een klein beetje stroom doorheen loopt geeft de led licht. De stroom kan er maar in een richting door, net als bij een diode. Vandaar de naam LED: Light Emitting Diode.</p><h3>Waar moet je op letten?</h3><p>Altijd aansluiten met een weerstand (bv 330 ohm), anders gaat hij stuk, en het lange pootje moet aan de plus kant, het korte aan de min.</p>",
    postImg: "https://upload.wikimedia.org/wikipedia/commons/c/c8/5mm_Red_LED.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "Diode",
    postContent: "<h3>Wat doet het?</h3><p>Een diode laat de stroom maar in 1 richting door. Het is meestal een cilindertje waaruit twee draden komen. Aan een kant is een ring waaraan je kan zien welke kant de plus en de min zijn.</p><h3>Waar moet je op letten?</h3><p>Een diode kan je snel verkeerd aansluiten en dan werkt je circuit niet of er kan iets kapot gaan. De ring moet aan de minkant worden aangesloten.</p>",
    postImg: "https://kapottespullen.nl/wp-content/uploads/2020/11/Diode.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "Weerstand",
    postContent: "<h3>Wat doet het?</h3><p>Een weerstand vermindert de stroom in een circuit zodat alle onderdelen de juiste hoeveelheid stroom krijgen. De waarde van de weerstand wordt uitgedrukt in ohm.</p><h3>Waar moet je op letten?</h3><p>Ze zijn klein en moeilijk van elkaar te onderscheiden. Aan gekleurde ringen kan je de waarde aflezen. Je kan het ook meten met een multimeter.</p>",
    postImg: "https://cdn2.soldeerboutje.nl/3672/velleman-ra3e9-weerstand-39ohm-100stuks.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "Transistor",
    postContent: "<h3>Wat doet het?</h3><p>Een transistor gebruikt een klein stroompje om een veel grotere stroom te schakelen of te versterken. Er gaat een stroompje (of meerdere stroompjes) lopen als er een kleine stroom door de basis gaat.</p><h3>Waar moet je op letten?</h3><p>Zorg dat het collectorpootje aan de pluskant is en het emitterpootje aan de minkant. Transistors zijn er in veel maten en soorten. Wij gebruiken meestal de 547, 557 of de 2222AG.</p>",
    postImg: "https://images-eu.ssl-images-amazon.com/images/I/31Kj%2B54y0tL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "Piezo buzzer",
    postContent: "<h3>Wat doet het?</h3><p>In een piezo element worden kristallen vervormd door elektriciteit. Een stroom van elektrische pulsen geeft een toon. De behuizing kan ook alleen een metalen schijfje zijn.</p><h3>Waar moet je op letten?</h3><p>De plus en min moeten goed worden aangesloten. Een piezo element kan ook als geluidssensor dienen. De vervorming van de kristallen wekken dan elektriciteit op.</p>",
    postImg: "https://www.distrelec.nl/Web/WebShopImages/landscape_large/_t/if/kingstate-kpeg238.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "IC",
    postContent: "<h3>Wat doet het?</h3><p>Er zijn heel veel verschillende soorten en maten. In de behuizing zitten complete elektronische circuits. In een IC kunnen enkele miljoenen onderdelen zitten.</p><h3>Waar moet je op letten?</h3><p>De IC's die wij gebruiken hebben aan een kant een markering om de pinnen te herkennen. Ze blijven niet altijd even goed in het breadboard zitten.</p>",
    postImg: "https://www.haje.nl/images/electronica/halfgeleiders/dil14_640.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "Drukknop",
    postContent: "<h3>Wat doet het?</h3><p>De drukknop die wij gebruiken maakt contact als hij ingedrukt wordt. Er zijn ook die net andersom werken. De pootjes passen min of meer in het breadboard.</p><h3>Waar moet je op letten?</h3><p>Kijk goed welke contacten worden doorverbonden bij indrukken. Meet het met de multimeter of controleer het batterij en lampje. Als hij niet werkt moet je hem misschien 90 graden draaien.</p>",
    postImg: "https://arduinofiets.classy.be/drukknop.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "LDR",
    postContent: "<h3>Wat doet het?</h3><p>Een LDR (Light Dependent Resistor) is een weerstand waarvan de waarde afhangt van de hoeveelheid licht die erop valt. In het donker is de weerstand heel hoog, valt er veel licht op dan is de weerstand heel laag.</p><h3>Waar moet je op letten?</h3><p>Het maakt niet uit aan welke kant je de plus of min zet, omdat we met een arduino alleen spanning kunnen registreren en geen weerstand gebruiken we een spanningsdeler.</p>",
    postImg: "https://cdn.myonlinestore.eu/e40d5160-bac0-4897-baae-d6065a5d5915/image/cache/full/0ba423784fcc5920d0f7fb9e540559b5eee74cfa.jpg",
    postLink: "article-link1"
  },
  {
    postTitle: "Potentiometer",
    postContent: "<h3>Wat doet het?</h3><p>Een potentiometer is een variabele weerstand. Door aan de middelste pen te draaien verandert de weerstand.</p><h3>Waar moet je op letten?</h3><p>De potentiometer heeft drie contacten. Tussen de twee buitenste zit het weerstandsmateriaal. Het midelste contact in verbonden met de draaibare loper. Deze wordt verbonden met een pin van de arduino.</p>",
    postImg: "https://www.digikey.nl/-/media/Images/Article%20Library/TechZone%20Articles/2021/May/The%20Fundamentals%20of%20Digital%20Potentiometers%20and%20How%20to%20Use%20Them/article-2021may-the-fundamentals-of-digital-fig1.jpg?la=en&ts=7103c327-388b-4a84-8620-851590a9ec9f",
    postLink: "article-link1"
  },
  {
    postTitle: "Relais",
    postContent: "<h3>Wat doet het?</h3><p>Een relais is een mechanische schakelaar die bediend wordt door elektrische stoom. Met relais kunnen we groot stromen schakelen zodat we met de arduino ook grotere motoren, lampen etc. kunnen aansturen.</p><h3>Waarmoet je op letten?</h3><p>Kijk goed welke contacten schakelen en welke van de elektromagneet zijn.</p>",
    postImg: "https://media.s-bol.com/gpD09MmmEjYY/550x449.jpg",
    postLink: "article-link1"
  },
];


/*
=====================
=====================
Thumbs
=====================
=====================
*/
//Loop length:
var postLength = post.length;
//Empty container:
$(".posts-box").empty();
//Loop:
for (i = 0; i < postLength; i++) {
  //Create thumb structure:
  var listItem =
    '<li>' +
    '<div class="card">' +
    '<a class="button" href="' + post[i].postLink + '" data-obj="' + i + '">' +
    '<img src="' + post[i].postThumb + '" alt="">' +
    '</a>' +
    '<div>' +
    '<h3>' + post[i].postTitle + '</h3>' +
    '<p>' + post[i].postAbstract + '</p>' +
    '</div>' +
    '<div>' +
    '<a class="button" href="' + post[i].postLink + '" data-obj="' + i + '">Explore</a>' +
    '</div>' +
    '</div>' +
    '</li>';
  //Append thumb:
  $(".posts-box").append(listItem);
};


/*
=====================
=====================
Inner post
=====================
=====================
*/
var thisElement = 0;

function innerContent(content) {
  $(".inner-img").attr("src", post[content].postImg);
  $(".inner-title").html(post[content].postTitle);
  $(".inner-text").html(post[content].postContent);
};

//Open post:
$(".button").click(function (e) {
  e.preventDefault();
  thisElement = $(this).attr("data-obj");
  innerContent(thisElement);
  $(".modal").css({ "display": "block" });
  dissBtn();
});

//Close post:
$(".close-post, .modal-sandbox").click(function () {
  $(".modal").css({ "display": "none" });
});

//Next post:
$(".next-post").click(function (e) {
  e.preventDefault();
  if (thisElement < postLength - 1) {
    thisElement = parseInt(thisElement) + 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Prev post:
$(".prev-post").click(function (e) {
  e.preventDefault();
  if (thisElement > 0) {
    thisElement = parseInt(thisElement) - 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Button disable:
function dissBtn() {
  $(".prev-post, .next-post").removeClass("disabled");
  if (thisElement <= 0) {
    $(".prev-post").addClass("disabled");
  }
  else if (thisElement >= postLength - 1) {
    $(".next-post").addClass("disabled");
  };
};


