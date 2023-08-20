// Collect values from the login form
const email = document.getElementById('signup-email').value.trim();
const password = document.getElementById('signup-password').value.trim();
const name = document.getElementById('signup-password').value.trim();
const signupSubmit = document.getElementById('Su-Submit')
 signupSubmit.addEventListener('click')



if (signupSubmit.click() && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
       });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/Dashboard');

      } else {
        alert(response.statusText);
   
      }
}



module.exports = email;