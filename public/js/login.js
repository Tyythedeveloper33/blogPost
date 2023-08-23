// Collect values from the login form
// const withAuth = require('../utils/auth');
// const User = require('../../models/users');

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
        const userData = await User.create(req.body)
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
        
        // If successful, redirect the browser to the profile page
       return view('/Dashboard');
     
      } else {
        alert(response.statusText);
   
      }
}

 }

//  router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
//  loginSubmit.addEventListener('submit',loginFormHandler);

 signupSubmit.addEventListener('submit',signupFormHandler);
