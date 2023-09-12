

const makecomment = async (event) => {
    /* Retrieve postId from the template's data context */;

 event.preventDefault()
  console.log('making comment')

  const content = document.querySelector('#comment-input').value.trim();
  var postId = document.getElementById("post-id").value;
  
   console.log("post id:",postId,"content:" ,content)
  const response = await fetch(`/api/dashRoutes/viewpost/${postId}/comment`, {
    method: 'POST',
    body: JSON.stringify({
      id: postId,
      content: content,
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

document.querySelector('.forms-container').addEventListener('submit', makecomment);