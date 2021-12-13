// jquery moda


var post=[
  {
    postTitle: "Opdracht 8",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1n5a69KNUhKDxHfpoevlRYCWS9YvAcJE5/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 9",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1w4HjY0T7yDm4Rmrfg2sNPo0EXIo96gu0/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 10",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1pZDg27iTtggZ9OE-KsHgEpZbLNl_onlF/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 11",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1sm76kv86vzdu03O3JDlGWV-aA_utSvMu/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 12",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1BQ3qNU1LEaYFOTqCpoI3ZPe_bVqMqxeh/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 13",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1vXLvdXqbZ7xzjc4z-tUbF3Fz0TFw1STr/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 14",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1Y4uKehvAK2XuWLeCbFD2fCw_fwtJUPFw/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 15a",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1eyhoziJFTLEPZiBi0kC808JVh0Zko3fZ/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 15b",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/1om5u60fshyygAgBezNV5dR0EFX7qiAwl/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Eindopdracht module 1",
    postContent: "<h3>Gemaakt door Revi</h3>",
    postImg: "https://drive.google.com/file/d/17Tlf08WabRrcaj_GK0WI0rD-_VO4dImr/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 21",
    postContent: "<h3>Gemaakt door Jules</h3>",
    postImg: "https://drive.google.com/file/d/1BOLJhW4AKvB8ie08TN4XuYfW3sK9J4Nt/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 22",
    postContent: "<h3>Gemaakt door Jules</h3>",
    postImg: "https://drive.google.com/file/d/1iVdrs--Zql-AjXWBqCanmMr5BQRxdz4X/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 23",
    postContent: "<h3>Gemaakt door Jules</h3>",
    postImg: "https://drive.google.com/file/d/1Rz1S1dbjWFuf1v1-MYcxkC6wuuCjBEbV/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 24",
    postContent: "<h3>Gemaakt door Jules</h3>",
    postImg: "https://drive.google.com/file/d/1Mc14db4L9_4dKtxNAP3w_gyReGUJQFC2/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Opdracht 25",
    postContent: "<h3>Gemaakt door Jules</h3>",
    postImg: "https://drive.google.com/file/d/1-5XFvZgGdDbB5n5KPZDjr1cye0GN68uw/preview",
    postLink: "article-link1"
  },
  {
    postTitle: "Eindopdracht Module 3",
    postContent: "<h3>Gemaakt door Roham</h3>",
    postImg: "https://drive.google.com/file/d/1gO2lTYHioxfiveo5r5KHfgmuTr4bNh0F/preview",
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
