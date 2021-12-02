// jquery moda


var post=[
  {
    postTitle: "Opdracht 8",
    postContent: "<h3>uitleg opdracht:</h3><br><br><p>bouw de schakeling op de vorige pagina na</p><br></bt><p>Bouw de bovenstaande schakeling na en test het.</p><p>Vergeet niet je USB-kabel met je ARDUINO te verbinden</p><p>Gaat het lampje branden als je de knop indrukt?</p>",
    postImg: "https://drive.google.com/file/d/1n5a69KNUhKDxHfpoevlRYCWS9YvAcJE5/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 9",
    postContent: "<h3>uitleg opdracht:</h3><br><br><p>Nu wordt het tijd om de Arduino aan te sluiten. Doorloop de stappen in deze paragraaf om de Arduino aan te sluiten op de computer en klaar te maken zodat je een programma kunt maken.</p><ul><li>Sluit Arduino met een USB kabel op de computer aan.&nbsp;</li><li>Start de Arduino software (vraag eventueel de docent waar deze staat). Als je thuis werkt, deze software kun je vinden via: https://www.arduino.cc/en/main/software.&nbsp;</li><li>Bij de settings in de Arduino software kun je de taal veranderen naar &apos;Nederlans (Dutch)&apos;.&nbsp;</li><li>Controleer nu of de Arduino en de software wel met elkaar op de juiste manier kunnen communiceren. Dat doe je als volgt:&nbsp;</li><li>Klik op Hulpmiddelen &ndash; Board en kijk of de Arduino die jij gebruikt overeenkomt met de software (zie afbeelding volgende pagina) en pas dit eventueel aan.</li></ul>",
    postImg: "https://drive.google.com/file/d/1w4HjY0T7yDm4Rmrfg2sNPo0EXIo96gu0/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 10",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/1pZDg27iTtggZ9OE-KsHgEpZbLNl_onlF/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 11",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/1sm76kv86vzdu03O3JDlGWV-aA_utSvMu/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 12",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/1BQ3qNU1LEaYFOTqCpoI3ZPe_bVqMqxeh/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 13",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/1vXLvdXqbZ7xzjc4z-tUbF3Fz0TFw1STr/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 14",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/1Y4uKehvAK2XuWLeCbFD2fCw_fwtJUPFw/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 15a",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/1eyhoziJFTLEPZiBi0kC808JVh0Zko3fZ/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 15b",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/1om5u60fshyygAgBezNV5dR0EFX7qiAwl/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Eindopdracht module 1",
    postContent: "<h3>uitleg opdracht:</h3><br><br>",
    postImg: "https://drive.google.com/file/d/17Tlf08WabRrcaj_GK0WI0rD-_VO4dImr/preview",
    postLink: "article-link1"
  }
];



/*
=====================
=====================
Inner post
=====================
=====================
*/
var thisElement = 0;

function innerContent(content){
  $(".inner-img").attr("src",post[content].postImg);
  $(".inner-title").html(post[content].postTitle);
  $(".inner-text").html(post[content].postContent);
};

//Open post:
$(".button").click(function(e){
  e.preventDefault();
  thisElement = $(this).attr("data-obj");
  innerContent(thisElement);
  $(".modal").css({"display":"block"});
  dissBtn();
});

//Close post:
$(".close-post, .modal-sandbox").click(function(){
  $(".modal").css({"display":"none"});
});

//Next post:
$(".next-post").click(function(e){
  e.preventDefault();
  if (thisElement<postLength-1) {
    thisElement = parseInt(thisElement) + 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Prev post:
$(".prev-post").click(function(e){
  e.preventDefault();
  if (thisElement>0) {
    thisElement = parseInt(thisElement) - 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Button disable:
function dissBtn(){
  $(".prev-post, .next-post").removeClass("disabled");
  if (thisElement<=0){
    $(".prev-post").addClass("disabled");
  }
  else if (thisElement>=postLength-1){
    $(".next-post").addClass("disabled");
  };
};
