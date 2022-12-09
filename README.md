# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/Screenshot%202022-12-08%20at%2019-18-48%20Intro%20component%20with%20sign%20up%20form.png)
![](./images/Screenshot%202022-12-08%20at%2019-18-48%20Intro%20component%20with%20sign%20up%20form.png)


### Links

- [Github Repo](https://github.com/ikennarichard/intro-component-with-sign-up-form)

- [Live](https://ikennarichard.github.io/intro-component-with-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Bootstrap 

### What I learned

Stacking Order: asides from z-index, "Opacity" would have any effect on which elements are stacked in front of which.

When there's no z-index or position properties, the stacking order is the same as the order of appearance in html.

z-index only works on positioned elements. If you try to set a z-index on an element without position specified (either relative or absolute), it will do nothing. Secondly, z-index values can create stacking contexts, and now suddenly what seemed simple just got a lot more complicated.

positioned elements with negative z-indexes are ordered first within a stacking context, which means they appear behind all other elements. 


## Acknowledgments

This project was interesting, i used the chance to practice Bootstrap. All i kept telling myself was practice css. Thanks to Front End Mentor and all the mentors thatve helped me to improve my skills. 
