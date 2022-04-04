/***script for mobile toggle button */
 const toggleButton = document.querySelector(".toggle-button");
 const navList = document.querySelector("#header-nav");
  toggleButton.addEventListener("click", function(){
    const visibleList = navList.getAttribute("data-visible");
    if(visibleList === "false"){
      navList.setAttribute("data-visible", true);
      toggleButton.setAttribute("aria-expanded",true)
    }else{
      navList.setAttribute("data-visible", false);
      toggleButton.setAttribute("aria-expanded",false);
    }
  })

/***pseudo-code for bookmark section*******/
//first we get all the link to be clicked
// then we get all the bookmark items to be displayed on click of each link
//we  then add click event listener to the link
//on the function on the event check if the bookmark item attribute showDiv is same with the clicked link.
let linkClicked = document.querySelectorAll(".section-nav_button");
let bookMarkedItem = document.querySelectorAll(".collections-item");

 linkClicked.forEach((item,index)=>{
     item.addEventListener("click", function(){
       bookMarkedItem.forEach(elem=>{
      if(item.getAttribute("showDiv") === elem.getAttribute("showDiv")){
        elem.classList.add("active");
        item.classList.add("showBorderBottom");
      }else{
        elem.classList.remove("active");
        item.classList.remove("showBorderBottom");
      }
       })
     })
 })

 /**script for email validation */
 //write the regular exp.for the email
 //create variable for container housing email,error message and icon
 //get the error element and create a variable with it;
 //create variable for the error icon
 // get the form container use to create a variable;
 //add and event listener on the form element, create a submit event on it
 //create function to display error container,message and icon

 let emailRegex =/^([a-z\d\-]+)@([a-z\d\-]+)\.([a-z]{2,7})(\.[a-z]{2,7})?$/
 const emailContainer = document.querySelector(".contact-emailField");
 const input = document.querySelector("#emailInput");
 const errMessage = document.querySelector(".error")
 const errIcon =document.querySelector(".contact-img");
 const form =document.querySelector(".contact-form");

 form.addEventListener("submit", function(e){
  
   valid = true;
  if(!emailRegex.test(input.value)){
   emailContainer.classList.add("invalid");
   errMessage.textContent ="Whoops! it must be an email";
   errIcon.style.display = "block";
   e.preventDefault();
    valid =false;
  }else{
   emailContainer.classList.remove("invalid");
   errMessage.textContent ="";
   errIcon.style.display = "none";
    valid =true;
  }
  return valid;
 })