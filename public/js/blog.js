// const makecomment = async (event) => {
//  event.preventDefault()
//   console.log('making comment')

//   const content = document.querySelector('#comment-input').value.trim();
//   var postId = document.querySelector('#post-id').value;
//    console.log("post id:",postId, content)
//   const response = await fetch('/api/dashRoutes/comment', {
//     method: 'POST',
//     body: JSON.stringify({
//       id: postId,
//       content: content
           
           


//           }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//       // body: JSON.stringify({ , lastname: lastName, email: userEmail, password: userPassword }),
     
//   if (response.ok) {
//     //this is where the problem liesas i am not getting console.logged my data nor message
//     console.log( await response.json())
//     // location.replace('/dashboard')
//   } else {
//     alert(response.statusText);
//   }
// };





async function viewPost(event) {
  event.preventDefault();
   console.log('bringing the post out')
  // Assuming you have postId defined somewhere.
  const postId = event.target.getAttribute('data-postid'); // Get the postId from the button's data attribute
  console.log(postId)
  try {
    const response = await fetch(`/api/dashRoutes/post/${postId}`, {
      method: 'POST', // Use 'POST' instead of 'Post' (uppercase)
      body: JSON.stringify({
        id: postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // const responseData = await response.json();
      console.log('post brought out');

      // Do something with the responseData, e.g., display it on the page
    } else {
      alert(`Error: ${response.statusText}`);
      // con
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
document.querySelector('.blogpost-form').addEventListener('submit', viewPost);