setTimeout(function(){
    document.getElementById('arrow-down').classList.remove('hide');
   }, 7000);

const typewriter = document.querySelector(".typewriter")

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("typewriter-animation");
      document.getElementById('frame_for_recom').classList.add('fade_in_form');
    }
  })
}

const options = {}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(typewriter)