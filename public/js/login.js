// Collect values from the login form
const withAuth = require('../utils/auth');

const signupSubmit = document.querySelector('#Su-Submit')


// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     // Collect values from the login form
//     const name = document.querySelector('#login-name').value.trim();
//     const password = document.querySelector('#login-password').value.trim();
  
//     if (name && password) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/login', {
//         method: 'POST',
//         body: JSON.stringify({ name, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         document.location.replace('/Dashboard');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  


 const signupFormHandler = async (event) => {
    event.preventDefault();
    
const password = document.querySelector('#signup-password').value.trim();
const name = document.querySelector('#signup-name').value.trim();

if (name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
     
       });
      if (response.ok) {
        console.log(body)
        // If successful, redirect the browser to the profile page
       return view('/Dashboard');
     
      } else {
        alert(response.statusText);
   
      }
}

 }


//  loginSubmit.addEventListener('submit',loginFormHandler);

 signupSubmit.addEventListener('submit',signupFormHandler);
module.exports = email;