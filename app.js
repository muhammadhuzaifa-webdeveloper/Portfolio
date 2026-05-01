
// ===== DOUBLE TYPING EFFECT =====

// line 1 (NAME)
const nameText = "I'm Huzaifa Web Developerr";

// line 2 (SKILLS)
const words = ["Frontend Developer","Designer","JS Learner"];

let i = 0, j = 0, k = 0;
let cur = "", del = false;

// NAME typing
function typeName(){
  if(j < nameText.length){
    document.getElementById("typing-name").innerHTML = nameText.substring(0, j);
    j++;
    setTimeout(typeName, 80);
  }
}

// SKILLS typing
function typeSkills(){
  cur = words[i];
  document.getElementById("typing").innerHTML = cur.substring(0, k);

  if(!del && k++ === cur.length){
    del = true;
    setTimeout(typeSkills, 1000);
    return;
  }

  if(del && k-- === 0){
    del = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeSkills, del ? 50 : 100);
}

// START BOTH AFTER LOAD
window.addEventListener("load", () => {
  typeName();
  setTimeout(typeSkills, 500); // thoda delay for smooth look
});




// ------------------------------------
// LOADER + ANIMATION START AFTER 7 SEC
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";

    // typing start AFTER loader
    type();

  }, 3000);

});


// // TYPING (REMOVE auto start)
// const words=["Frontend Developer","Designer","JS Learner"];
// let i=0,j=0,cur="",del=false;

// function type(){
//   cur=words[i];
//   document.getElementById("typing").innerHTML=cur.substring(0,j);

//   if(!del && j++===cur.length){
//     del=true; setTimeout(type,1000); return;
//   }

//   if(del && j--===0){
//     del=false; i=(i+1)%words.length;
//   }

//   setTimeout(type,del?50:100);
// }


// HAMBURGER FIX
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");

  hamburger.textContent = menu.classList.contains("show") ? "✖" : "☰";
});
// // LOADER FIX (ONLY 7 SEC)
// window.addEventListener("load", () => {
//   const loader = document.getElementById("loader");

//   setTimeout(() => {
//     loader.style.display = "none";
//   }, 7000);
// });


// // TYPING
// const words=["Frontend Developer","Designer","JS Learner"];
// let i=0,j=0,cur="",del=false;

// function type(){
//   cur=words[i];
//   document.getElementById("typing").innerHTML=cur.substring(0,j);

//   if(!del && j++===cur.length){
//     del=true; setTimeout(type,1000); return;
//   }

//   if(del && j--===0){
//     del=false; i=(i+1)%words.length;
//   }

//   setTimeout(type,del?50:100);
// }
// type();


// // HAMBURGER FIX
// const hamburger = document.getElementById("hamburger");
// const menu = document.getElementById("menu");

// hamburger.addEventListener("click", () => {
//   menu.classList.toggle("show");
//   hamburger.textContent = menu.classList.contains("show") ? "✖" : "☰";
// });