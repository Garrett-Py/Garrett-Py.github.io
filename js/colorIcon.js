/**************************************

This Javascript file is used to color things.

***************************************/











/**************************************

Colors 

***************************************/
var color1 = "#d394ff";
var color2 = "#dddddd";











/**************************************

Function to tell how much the user scrolled.
Also, calls functions to color icons based 
upon how much they have scrolled.

***************************************/
function isScrolling() {
var totalScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.getElementById("r0").clientHeight;
var scrolled = (totalScroll / height);

if (scrolled < document.getElementById("r0").clientHeight/height) {
colorFunc11();
}

if (scrolled > document.getElementById("r0").clientHeight/height) {
colorFunc12();
}

if (scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight )/height && scrolled > document.getElementById("r0").clientHeight/height) {
colorFunc21();
}

if (scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight)/height || scrolled < document.getElementById("r0").clientHeight/height) {
colorFunc22();
}

if (scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight )/height && scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight)/height) {
colorFunc31();
}

if (scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight)/height || scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight )/height) {
colorFunc32();
}

if (scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight)/height && scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight)/height) {
colorFunc41();
}

if (scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight)/height || scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight)/height) {
colorFunc42();
}

if (scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight + document.getElementById("r4").clientHeight)/height && scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight)/height) {
colorFunc51();
}

if (scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight + document.getElementById("r4").clientHeight)/height || scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight)/height) {
colorFunc52();
}

if (scrolled > (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight + document.getElementById("r4").clientHeight)/height) {
colorFunc61();
}

if (scrolled < (document.getElementById("r0").clientHeight + document.getElementById("r1").clientHeight + document.getElementById("r2").clientHeight + document.getElementById("r3").clientHeight + document.getElementById("r4").clientHeight)/height) {
colorFunc62();
}
}







/**************************************

Functions used to color icons. 

***************************************/

function colorFunc11() {
document.getElementById("svgId01").style.fill = color1;
document.getElementById("textId01").style.color = color1;
document.getElementById("svgId01").style.transition = "ease 200ms";
document.getElementById("textId01").style.transition = "ease 200ms";
}


function colorFunc12() {
document.getElementById("svgId01").style.fill = color2;
document.getElementById("textId01").style.color = color2;
document.getElementById("svgId01").style.transition = "ease 200ms";
document.getElementById("textId01").style.transition = "ease 200ms";
}


function colorFunc21() {
document.getElementById("svgId02").style.fill = color1;
document.getElementById("textId02").style.color = color1;
document.getElementById("svgId02").style.transition = "ease 200ms";
document.getElementById("textId02").style.transition = "ease 200ms";
}


function colorFunc22() {
document.getElementById("svgId02").style.fill = color2;
document.getElementById("textId02").style.color = color2;
document.getElementById("svgId02").style.transition = "ease 200ms";
document.getElementById("textId02").style.transition = "ease 200ms";
}


function colorFunc31() {
document.getElementById("svgId03").style.fill = color1;
document.getElementById("textId03").style.color = color1;
document.getElementById("svgId03").style.transition = "ease 200ms";
document.getElementById("textId03").style.transition = "ease 200ms";
}


function colorFunc32() {
document.getElementById("svgId03").style.fill = color2;
document.getElementById("textId03").style.color = color2;
document.getElementById("svgId03").style.transition = "ease 200ms";
document.getElementById("textId03").style.transition = "ease 200ms";
}


function colorFunc41() {
document.getElementById("svgId04").style.fill = color1;
document.getElementById("textId04").style.color = color1;
document.getElementById("svgId04").style.transition = "ease 200ms";
document.getElementById("textId04").style.transition = "ease 200ms";
}


function colorFunc42() {
document.getElementById("svgId04").style.fill = color2;
document.getElementById("textId04").style.color = color2;
document.getElementById("svgId04").style.transition = "ease 200ms";
document.getElementById("textId04").style.transition = "ease 200ms";
}


function colorFunc51() {
document.getElementById("svgId05").style.fill = color1;
document.getElementById("textId05").style.color = color1;
document.getElementById("svgId05").style.transition = "ease 200ms";
document.getElementById("textId05").style.transition = "ease 200ms";
}


function colorFunc52() {
document.getElementById("svgId05").style.fill = color2;
document.getElementById("textId05").style.color = color2;
document.getElementById("svgId05").style.transition = "ease 200ms";
document.getElementById("textId05").style.transition = "ease 200ms";
}


function colorFunc61() {
document.getElementById("svgId06").style.fill = color1;
document.getElementById("svgId06").style.stroke = color1;
document.getElementById("textId06").style.color = color1;
document.getElementById("svgId06").style.transition = "ease 200ms";
document.getElementById("textId06").style.transition = "ease 200ms";
}


function colorFunc62() {
document.getElementById("svgId06").style.fill = color2;
document.getElementById("svgId06").style.stroke = color2;
document.getElementById("textId06").style.color = color2;
document.getElementById("svgId06").style.transition = "ease 200ms";
document.getElementById("textId06").style.transition = "ease 200ms";
}


function colorFunc71() {
document.getElementById("svgId07").style.fill = "#a1a1fa";
document.getElementById("textId07").style.color = "#a1a1fa";
document.getElementById("svgId07").style.transition = "ease 200ms";
document.getElementById("textId07").style.transition = "ease 200ms";
document.getElementById("svgId07").style.filter = "brightness(calc(2/3))";
document.getElementById("textId07").style.filter = "brightness(calc(2/3))";
}


function colorFunc72() {
document.getElementById("svgId07").style.fill = color2;
document.getElementById("textId07").style.color = color2;
document.getElementById("svgId07").style.transition = "ease 200ms";
document.getElementById("textId07").style.transition = "ease 200ms";
document.getElementById("svgId07").style.filter = "brightness(1.5)";
document.getElementById("textId07").style.filter = "brightness(1.5)";
} 


function colorFunc81() {
document.getElementById("svgId08").style.fill = "#fa9191";
document.getElementById("svgId08").style.transition = "ease 200ms";
document.getElementById("svgId08").style.filter = "brightness(calc(2/3))";
}


function colorFunc82() {
document.getElementById("svgId08").style.fill = "#aa1111";
document.getElementById("svgId08").style.transition = "ease 200ms";
document.getElementById("svgId08").style.filter = "brightness(1.5)";
} 
