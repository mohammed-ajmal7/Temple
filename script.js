let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}



var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";    
}
function closemenu(){
    sidemenu.style.right = "-200px";    
}


const scriptURL = ''
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Sucessfully"
        setTimeout(function(){
            msg.innerHTML = "" 
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})