const makecomment = async () => {
    console.log('making post')
    const response = await fetch('/api/dashRoutes/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log(data)
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector('#post').addEventListener('click', makecomment);