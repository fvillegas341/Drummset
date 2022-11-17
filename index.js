// instructions
const nameOfPlayer = prompt("Please type your name:");

const heading2 = $("h2");

//Inserting the player's name on the page.
heading2.text(`Have Fun ${nameOfPlayer}`);







const numberOfButtons = $(".drum");


for (let i = 0; i < numberOfButtons.length; i++) {
  const button = numberOfButtons[i];
  button.addEventListener("click", function() {
    const buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
  });
}



//Detecting Keyboard Press
document.addEventListener("keydown", function (e) {
   makeSound(e.key);
})





//function to all the keys
function makeSound (key) {
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
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "d":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "j":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "l":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "k":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    default:
  }
}
