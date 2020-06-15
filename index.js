// on click, change menu icon to cross
// on click, change cross to menu 

let bgr = document.getElementById("burger");
bgr.addEventListener('click', function() {
    console.log("Yum");
// change value of bgr
   if(bgr.className == "fas fa-bars"){
    bgr.className = "fas fa-times";
// change hamburger color
    bgr.style.color = "black";
    document.getElementById("coke").style.color = "black";
    document.getElementById("fries").style.color ="black";    
// add a whiteboard 
    document.querySelector("ul").style.backgroundColor = "orange";
    document.querySelector(".lang").style.visibility = "visible";
    document.querySelector(".categories").style.visibility = "visible";
    document.querySelector("header > ul").style.borderBottom = "2px solid silver";
    document.querySelector(".call-to-action").style.visibility = "visible";
} else if (bgr.className == "fas fa-times") {
    bgr.className = "fas fa-bars";   
    bgr.style.color = "silver";
    document.getElementById("coke").style.color = "silver";
    document.getElementById("fries").style.color ="silver";  
    document.querySelector("ul").style.backgroundColor = "transparent";
    document.querySelector(".lang").style.visibility = "hidden";
    document.querySelector(".categories").style.visibility = "hidden";
    document.querySelector("header > ul").style.borderBottom = "none";
    document.querySelector(".call-to-action").style.visibility = "hidden";

// remove the whiteboard
    // hdr.removeChild(whiteboard);
   }
});

// create an element, append, remove? or... visibility: hidden || visbility: visible; 

/*

node.createElement
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
node.appendChild
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
node.removeChild
https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

*/


// onLoad, present a box that can be removed with a click in the upper right corner
// 0. Greeting / Terms 
// i. LogIn to Google, Facebook, or Phone
// ii. Trouble Logging in Link
// 

// opacity 0.5

// z-index over all others; opacity 0.0 vs. 0.5 in others
// position: absolute? removed from natural flow ... put at html bottom, but moved to top

// let ticket = document.querySelector('.ticket');
// ticket.addEventListener('load', function(e){
//     e.preventDefault;
//     ticket.style.visibility = "visible";
// });

// // what is the parent node of ticket? 
// let ticket_btn = document.querySelector('#ticket_btn').addEventListener('click', function(e){
//     console.log(ticket.parentNode)
//     let con = document.querySelector('.container');
//     con.removeChild(ticket);
//     // ticket.style.visibility = "hidden";
// });

