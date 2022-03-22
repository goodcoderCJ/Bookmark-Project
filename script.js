/***pseudo-code********/
//first we get all the link to be clicked
// then we get all the bookmark items to be displayed on click of each link
//we  then add click event listener to the link
//on the function on the event check if the bookmark item attribute showDiv is same with the clicked link.
let linkClicked = document.querySelectorAll(".section-nav_button");
let bookMarkedItem = document.querySelectorAll(".collections-item");
 linkClicked.forEach((item,index)=>{
     item.addEventListener("click", function(e){
       bookMarkedItem.forEach(elem=>{
      if(e.target.getAttribute("showDiv") === elem.getAttribute("showDiv")){
        elem.classList.add("active");
      }else{
        elem.classList.remove("active");
      }
       })
     })
 })

const toggleButton =document.querySelector(".toggle-button");
const menuList = document.querySelector("#header-nav");

toggleButton.addEventListener("click", function(){
  const visibility = menuList.getAttribute("data-visible");
  if(visibility === "false"){
    menuList.setAttribute("data-visible", true);
    toggleButton.setAttribute("aria-expanded",true);
  }else if(visibility === "true"){
    menuList.setAttribute("data-visible", false);
    toggleButton.setAttribute("aria-expanded",false);
  }
})