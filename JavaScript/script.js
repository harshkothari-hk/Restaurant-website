let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

function search(){
document.querySelector('#search-icon')= () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close') = () =>{
  document.querySelector('#search-form').classList.remove('active');
}
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

let namenode=document.getElementById("fname");
let errornode1=document.getElementById("error1");

let numnode=document.getElementById("num");
let errornode2=document.getElementById("error2");

let ordernode=document.getElementById("odr");
let errornode3=document.getElementById("error3");

let quantitynode=document.getElementById("qty");
let errornode5=document.getElementById("error5");

let addrnode=document.getElementById("addr");
let errornode6=document.getElementById("error6");

function validate1(){
  errornode1.innerHTML="";
  let name= namenode.value;
  if(namenode.value==""){
    errornode1.innerHTML="* This field is required";
    namenode.style.border="2px solid red";
    return false;
}
else if(name.length<2){
    errornode1.innerHTML="Name contain atleast 2 Character";
    namenode.style.border="2px solid red";
    return false;
}
else{
    namenode.style.border="2px solid green";
    return true;
}
}

function validate2(){
  errornode2.innerHTML="";
  let num= numnode.value;
  if(numnode.value==""){
    errornode2.innerHTML="* This field is required";
    numnode.style.border="2px solid red";
    return false;
}
else if(isNaN(num)){
    errornode2.innerHTML="Enter Valid Contact Number of 10 Digits";
    numnode.style.border="2px solid red";
    return false;
}
else if(num.length!=10){
  errornode2.innerHTML="Enter Valid Contact Number of 10 Digits";
  numnode.style.border="2px solid red";
  return false;
}
else{
    numnode.style.border="2px solid green";
    return true;
}
}

function validate3(){
  errornode3.innerHTML="";
  let order= ordernode.value;
  if(ordernode.value==""){
    errornode3.innerHTML="* Please enter food name";
    ordernode.style.border="2px solid red";
    return false;
}
else{
    ordernode.style.border="2px solid green";
    return true;
}
}

function validate5(){
  errornode5.innerHTML="";
  let quant= quantitynode.value;
  if(quantitynode.value==""){
    errornode5.innerHTML="* This field is required";
    quantitynode.style.border="2px solid red";
    return false;
}
else if(isNaN(quant)){
    errornode5.innerHTML="Enter Valid Number between 1 to 10";
    quantitynode.style.border="2px solid red";
    return false;
}
else if(quant<1 || quant >10){
  errornode5.innerHTML="Enter Valid Number between 1 to 10";
  quantitynode.style.border="2px solid red";
  return false;
}
else{
    quantitynode.style.border="2px solid green";
    return true;
}
}

function validate6(){
  errornode6.innerHTML="";
  let address= addrnode.value;
  if(addrnode.value==""){
    errornode6.innerHTML="* Please enter your address";
    addrnode.style.border="2px solid red";
    return false;
}
else if(address.length<10){
    errornode6.innerHTML="Please enter proper address";
    addrnode.style.border="2px solid red";
    return false;
}
else{
    addrnode.style.border="2px solid green";
    return true;
}
}

function validateForm(){
  let state1=validate1();
  let state2=validate2();
  let state3=validate3();
  let state5=validate5();
  let state6=validate6();

  return (state1 && state2 && state3 && state5 && state6);
}

function cart(){
  alert("Login first");
}