const makepost = async () => {
    console.log('making post')
    const response = await fetch('/api/dashRoutes/makeBlog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log(data)
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector('#post').addEventListener('click', makepost);