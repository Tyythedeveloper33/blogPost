const makecomment = async () => {
  console.log('making comment')
 

  const content = document.querySelector('#comment-input').value.trim();
  var postId = document.querySelector('#Comment').dataset.postid;
   console.log("post id:",postId,document.querySelector('#Comment').dataset )
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
    location.replace('/dashboard')
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
