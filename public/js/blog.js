const makecomment = async (event) => {
 event.preventDefault()
  console.log('making comment')

  const content = document.querySelector('#comment-input').value.trim();
  var postId = document.querySelector('#post-id').value;
   console.log("post id:",postId, content)
  const response = await fetch('/api/dashRoutes/comment', {
    method: 'POST',
    body: JSON.stringify({
      id: postId,
      content: content
           
           


          }),
    headers: { 'Content-Type': 'application/json' },
  });

      // body: JSON.stringify({ , lastname: lastName, email: userEmail, password: userPassword }),
     
  if (response.ok) {
    //this is where the problem liesas i am not getting console.logged my data nor message
    console.log( await response.json())
    // location.replace('/dashboard')
  } else {
    alert(response.statusText);
  }
};


document.querySelector('.form-class').addEventListener('submit', makecomment);


// method: 'POST',
//     body: JSON.stringify({
//       postId,
//       body
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
