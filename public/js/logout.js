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

   function logMessage(){
    alert("Comments currently disabled for creators post, but you can get started by clicking the Dashboard link!!")
  }
  



document.querySelector('#logout').addEventListener('click', logout);
document.querySelector('#makeComment').addEventListener('click', logMessage);

