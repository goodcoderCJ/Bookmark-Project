# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./bookmark-challenge-mobile.png)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript


### What I learned
- I learnt how to use the aria-controls and aria-expanded attribute to achieve toggle button

```html
<button class="toggle-button" aria-controls="header-nav" aria-expanded="false"><span class="sr-only">Menu</span></button>
```
- Got to learn how to use :target pseudo-class to target content.
```css
answers {
  overflow: hidden;
  max-height: 0%;
  transition: max-height 2s ease-out;
  -webkit-transition: max-height 2s ease-out;
  -moz-transition: max-height 2s ease-out;
  -ms-transition: max-height 2s ease-out;
  -o-transition: max-height 2s ease-out;
  display: none;
}
.questions-container:target .answers {
  max-height: 100%;
  display: block;
 
}
```
- Learnt how to use e.preventDefault() to stop an event from it execute stage on the input element so correction can take place.
```js
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


## Acknowledgments
- My profound gratitude and appreciation goes to Chilaka Obinna Michael whose oversight pinned errors brought about corrections to achieve this design. .
