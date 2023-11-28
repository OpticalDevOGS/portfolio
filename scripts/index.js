// Get the button element
const button = document.getElementsByClassName('.homeButton');
console.log("tis working");
if (button != null) {
    setTimeout(() => {
        button.value = "meh";
        console.log("tis working");
    }, 2000);
}

button.value = "meh";

// // Add a mouseover event listener
// button.addEventListener('mouseover', () => {
//   // Change the button's background color
//   button.style.color = 'blue';
// });

// // Add a mouseout event listener
// button.addEventListener('mouseout', () => {
//   // Change the button's background color back to its original color
//   button.style.color = '';
// });