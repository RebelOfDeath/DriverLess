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


var post=[
  {
    postTitle: "LED (Light Emmiting Diode)",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "Diode",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "Weerstand",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "Transistor",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "Piezo buzzer",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "IC",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "Drukknop",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "LDR",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "Potentiometer",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
    postLink: "article-link1"
  },
  {
    postTitle: "Relais",
    postContent: "<h3>Wat doet het?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p><h3>Waar let je op?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. Quae velit ad cupiditate necessitatibus, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima.</p>",
    postImg: "https://drive.google.com/uc?id=12RhLJZygX4IJfcc5nFH_eJ4H2x_XuIuo",
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
for (i=0; i<postLength; i++) {
  //Create thumb structure:
  var listItem =
    '<li>'+
      '<div class="card">'+
        '<a class="button" href="'+post[i].postLink+'" data-obj="'+i+'">'+
          '<img src="'+post[i].postThumb+'" alt="">'+
        '</a>'+
        '<div>'+
          '<h3>'+post[i].postTitle+'</h3>'+
          '<p>'+post[i].postAbstract+'</p>'+
        '</div>'+
        '<div>'+
          '<a class="button" href="'+post[i].postLink+'" data-obj="'+i+'">Explore</a>'+
        '</div>'+
      '</div>'+
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


