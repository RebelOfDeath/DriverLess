setTimeout(function(){
 document.getElementById('arrow-down').classList.remove('hide');
}, 7000);

var img = document.getElementById('test-image');
var width = img.clientWidth;
var vw = window.innerWidth;
var leftimg = (vw / 2) - (width / 2);
document.getElementById('test-iamge').style.left = leftimg + "px";