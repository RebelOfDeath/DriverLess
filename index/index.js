setTimeout(function(){
 document.getElementById('arrow-down').classList.remove('hide');
}, 7000);

// var img = document.getElementById('test-image');
// var width = img.clientWidth;
// var vw = window.innerWidth;
// var leftimg = (vw / 2) - (width / 2);
// document.getElementById('test-image').style.left = leftimg + "px";

//region for typewriter animation of intro modules section
//#region

const typewriter = document.querySelector(".typewriter")

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("typewriter-animation")
    }
  })
}

const options = {}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(typewriter)

//#endregion


