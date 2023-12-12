# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: https://github.com/JoeMcDonough15/card-details
- Live Site URL: https://joemcdonough15.github.io/card-details/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

'''

This was my first project built with React. I used the basic create-react-app command from Terminal (I use Hyper) and I did not configure any of the webpack myself. I tried to replicate the design as closely as possible and I used reusable components built in React. I am proud that I added some extra form validation using regular expressions, including:

1. The only name characters permitted are letters a-zA-Z, hyphen, period, and only single spaces between first and last name. If a name begins or ends with a space it is invalid. If a name includes repating spaces, or prohibited characters, it is also invalid.

2. Card number validation that prohibits anything other than digits and that automatically spaces the card number for every 4 digits entered. Once a user begins entering digits, no other characters will appear in the string. If the user begins the card number with a non-digit character, the warning state will be activated. Card numbers longer than 19 characters (including spaces automatically inserted between groups of 4 digits) are clipped. If the card number is less than 16 digits long, a warning of "incorrect card length" is applied.

3. For month, year, and cvc only digits are permitted and the values are clipped at the appropriate length (2 digits for month/year and 3 digits for cvc).

4. I also decided to include some card expiration validation. Any two digit year that is less than the current year (assuming the first two year digits are 20) is immediately flagged as expired (i.e. 21 would be flagged as expired). If the two digit year is the same as the current year, the month must be before the current month or it is labeled as invalid. A custom state of Card Expired appears below the date input if this is the case. I am generating date objects inside the function that checks for expiration.

5. I decided to take advantage of imports and exports for this challenge. Since I used so many helper functions to validate the input fields, I saved them in the same directory as the CardForm.jsx component but imported them to clean up the component. The only helper functions that I left inside that component are the functions that deal directly with html elements being returned by the component.

6. The form is unable to be submitted until all warning states are removed from every input field.

'''

### Continued development

I still struggle greatly with responsive design. I know the mobile design given for this challenge was set to 375px but I found that some stuff broke at smaller device sizes (like Galaxy fold). I added a media query to help with that. I still wonder if I should have broken into the larger desktop styles for tablets. Right now, the mobile styles remain until the screen width reaches 1300px. I also have not used any CSS preprocessers yet, like sass/scss. Everything I've done stylistically is vanilla CSS.

React is still very complicated to me and I have only scratched the surface with webpack. For my next challenge, I want to try to write the development and production webpack configs myself, using Corey House's course on Pluralsight. I managed state with this challenge by passing stateful objects and state setting functions to individual components. In the future, I'd like to incorporate Redux to learn how to handle more advanced state, also using Corey House's course.

I'm also struggling with how to change my site's url that is hosted on github pages. When I first set up my project to be hosted on gh-pages I made the homepage "https://JoeMcDonough15.github.io/card-details". But then I saw in the README.md included in the challenge files that we should make the url named something different:

**⚠️ IMPORTANT ⚠️: When you create the live version of your project, we recommmend giving it a random name for the URL. This is because with it being a fake credit card form, some browsers will open a warning notice before people can access your project. So it's best to name the project something unrelated to credit cards so that browsers don't show the warning to people viewing your project.**

I can't figure out how to change the environment url for a deployed site on gh-pages. I found this article, which seems to say it's not possible to do this:

https://github.com/orgs/community/discussions/37267

Does anyone know of a way that I can change the homepage from https://JoeMcDonough15.github.io/card-details to https://JoeMcDonough15.github.io/new-random-name-for-challenge ?

## Author

- Website - Joe McDonough https://github.com/JoeMcDonough15
- Frontend Mentor - https://www.frontendmentor.io/profile/JoeMcDonough15

## Acknowledgments

I have received private instruction from Yale Work (https://github.com/zevgon) and Nick Myers (https://github.com/njmyers) over the course of my studies in web development. I want to thank both of them for their constant encouragement, challenges, and inspiration.

Here is the link to Corey House's Pluralsight course: https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents
