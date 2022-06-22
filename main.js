// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
errorModal.classList.add("hidden")
// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT HAS LOADED")
})

clickListener()

function clickListener(){
  document.addEventListener("click",(event)=> {
  console.log(event.target.classList)
  console.log(event.target.classList[0])
  if(event.target.classList[1]===('activated-heart')){
    mimicServerCall()
    .then(resp=>{
      event.target.classList.remove("activated-heart")
    })
    .catch(error=>{
      errorModal.classList.add("hidden")
      setTimeout(()=>{hideError()}, 3000)
    }
  )}
  else if(event.target.classList[0] === 'like-glyph'){
    mimicServerCall()
    .then(resp=>{
      event.target.classList.add("activated-heart")
        })
    .catch(error=>{
      errorModal.classList.remove("hidden")
      setTimeout(()=>{hideError()}, 3000)
    }
      )}
}
  )}


//When a user clicks on an empty heart: Invoke mimicServerCall

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
