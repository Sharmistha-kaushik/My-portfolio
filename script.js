// Contact Form

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});

}

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((section)=>{

section.classList.add("hidden");

observer.observe(section);

});

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Dark / Light Mode

const toggle = document.querySelector(".dark-toggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

toggle.innerHTML = "☀️";

}else{

toggle.innerHTML = "🌙";

}

});

// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});

// Typing Animation Text Change

const typingText = document.querySelector(".typing");

const texts = [

"Web Developer",

"BCA Student",

"Frontend Developer",

"React Learner"

];

let index = 0;

setInterval(()=>{

index++;

if(index >= texts.length){

index = 0;

}

typingText.textContent = texts[index];

},2500);