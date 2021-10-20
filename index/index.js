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

//region for choosing right page to start
//#region
function checkform1(){
  if(document.getElementById('yes1').checked){
    document.getElementById('recommendation').innerHTML = 'Weet jij al welke algemene componenten er bestaan?';
    document.getElementById('form1').classList.add('hide');
    document.getElementById('form2').classList.remove('hide');
  }
  else{
    document.getElementById('recommendation').innerHTML = 'je zou het best bij <a href="./Arduino/arduino.html">Arduino</a> kunnen beginnen';
    document.getElementById('form1').classList.add('hide');
  }
}
function checkform2(){
  if(document.getElementById('yes2').checked){
    document.getElementById('recommendation').innerHTML = 'Wow! jij weet al super veel. Je kan direct naar de <a href="./Opdrachten/opdrachten.html">opdrachten</a>';
    document.getElementById('form2').classList.add('hide');
  }else{
    document.getElementById('recommendation').innerHTML = 'je bent er bijna! je moet wel eerst weten welke <a href="./Componenten/componenten.html">componenten</a> er zijn.';
    document.getElementById('form2').classList.add('hide');
  }
}
//#endregion
