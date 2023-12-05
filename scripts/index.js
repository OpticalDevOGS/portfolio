// Get the button element
var birthdayDate = new Date("2009-05-21");
// const button = document.getElementsByClassName('.headingButton');
// console.log("tis working");
// if (button != null) {
//     setTimeout(() => {
//         button.value = "meh";
//         console.log("tis working");
//     }, 2000);
// }

// window.onload = function() {
//     document.getElementsByClassName('.headerButton').className += "loaded";
// }

// button.value = "meh";

function ageCalculation() {
    var ageDifference = Date.now() - birthdayDate;
    var DateofAge = new Date(ageDifference);
    // document.getElementById("ageDiv").innerHTML = "("+(DateofAge.getUTCFullYear() - 1970)+" years old)";
    document.getElementById("ageDiv").innerHTML = "("+(DateofAge.getUTCFullYear() - 1970)+" years old)";
}
setTimeout(() => {
    ageCalculation();
}, 2000);

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