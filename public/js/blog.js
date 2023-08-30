const makecomment = async () => {
    console.log('making post')
    const response = await fetch('/api/dashRoutes/comment', {
      method: 'POST',
      body: JSON.stringify({
              postId,
              body, 
              

            }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log(data)
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector('#Comment').addEventListener('click', makecomment);

  // method: 'POST',
  //     body: JSON.stringify({
  //       postId,
  //       body
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });