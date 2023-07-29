function show_offer(){
 document.querySelector(".show-offer").style.display="flex"
}
function hide_offer(){
    document.querySelector(".show-offer").style.display="none"
}
function greenhouse(){
    document.querySelector(".green-house").style.display="flex";
    document.querySelector(".solar").style.display="none";
    document.querySelector(".environment").style.display="none";
    
}
function solar(){
    document.querySelector(".green-house").style.display="none";
    document.querySelector(".solar").style.display="flex";
    document.querySelector(".environment").style.display="none";

}
function environment(){
    document.querySelector(".green-house").style.display="none";
    document.querySelector(".solar").style.display="none";
    document.querySelector(".environment").style.display="flex";
}
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("gsebtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
function changeBg(){
    var navbar=document.getElementById("navb");
    var scrollValue=window.scrollY;
    if(scrollValue<150){
        navbar.classList.remove("bgcolor");
    }
    else{
        navbar.classList.add("bgcolor");
    }
}
window.addEventListener('scroll',changeBg);

    

    
