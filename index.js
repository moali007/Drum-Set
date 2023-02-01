const Button = document.querySelectorAll("button");
const noOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButtons; i++) {
  const dr = document.querySelectorAll(".drum")[i];
  dr.addEventListener("click", function () {
    makeSound(this.innerHTML);
  });

  function makeSound(key) {
    switch (key) {
      case "w":
        const tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        const tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        const tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        const tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        const snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        const kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "l":
        const crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      default:
        console.log("error");
    }
  }
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});
