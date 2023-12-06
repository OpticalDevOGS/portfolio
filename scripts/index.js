var birthdayDate = new Date("2009-05-21");
const description = "Hello, I'm a JS, CSS and HTML developer that also does game devleopment.";

function ageCalculation() {
    var ageDifference = Date.now() - birthdayDate;
    var DateofAge = new Date(ageDifference);
    document.getElementById("ageDiv").innerHTML = "("+(DateofAge.getUTCFullYear() - 1970)+" years old)";
}

function typewritter(element, text, i=0) {
    element.textContent += text[i];

    if (i==text.length -1) {
        return;
    }

    setTimeout(() => typewritter(element, text, i+1), Math.random() * 100);
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        ageCalculation();
       // while (true) {
            //console.log(window.scrollY);
        //}
        typewritter(document.querySelector(".cole-galeDesc"), description);
        console.log(window.scrollY);
    }
};
