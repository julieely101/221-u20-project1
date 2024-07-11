


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

//let title = document.getElementById('splash_title');
//console.log(title.HTML);


//title.addEventListener('click', () => {
  //console.log('testing');
//});

//title.addEventListener('keypress', () => {
  //console.log('testing');
//});

//let fadeText = document.getElementById('fade_text');
//console.log(fadeText.innerHTML + " hello!");\

//fadeText.onclick = () => {
//window.location = "/feed";
//}
document.addEventListener('keypress', function(event) {
  checkKeyPress(event);
});
//for space bar
document.addEventListener('click', function() {
  goToLocation('/feed')
});
//for mouseclick

