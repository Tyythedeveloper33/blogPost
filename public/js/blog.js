const makecomment = async () => {
  console.log('making comment')
 

  const comment = document.querySelector('#comment').value.trim();


  const response = await fetch('/api/dashRoutes/comment', {
    method: 'POST',
    body: JSON.stringify({
      post_id: postId,
      content: req.body.content
           
           


          }),
    headers: { 'Content-Type': 'application/json' },
  });

      // body: JSON.stringify({ , lastname: lastName, email: userEmail, password: userPassword }),
     
  if (response.ok) {
    //this is where the problem liesas i am not getting console.logged my data nor message
    response.json(data)
    console.log('heyyyyyy')
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
