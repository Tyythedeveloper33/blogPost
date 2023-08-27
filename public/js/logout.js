const logout = async () => {
    console.log('logging out')
    const response = await fetch('/api/allUserRoutes/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  



document.querySelector('#logout').addEventListener('click', logout);

