// Selecting necessary elements from the DOM
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Adding event listener for the Register link
registerLink.addEventListener('click', () => {
    // Adding the 'active' class to the wrapper on Register link click
    wrapper.classList.add('active');
});

// Adding event listener for the Login link
loginLink.addEventListener('click', () => {
    // Removing the 'active' class from the wrapper on Login link click
    wrapper.classList.remove('active');
});

// Adding event listener for the Login button
btnPopup.addEventListener('click', () => {
    // Adding the 'active-popup' class to the wrapper on Login button click
    wrapper.classList.add('active-popup');
});

// Adding event listener for the close icon
iconClose.addEventListener('click', () => {
    // Removing the 'active-popup' class from the wrapper on close icon click
    wrapper.classList.remove('active-popup');
});
