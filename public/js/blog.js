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



const blogPostForms = document.querySelectorAll('[class*="blogpost-form"]');
blogPostForms.forEach((form) => {
  form.addEventListener('submit', viewPost);
 });


 async function viewPost(event) {
  event.preventDefault();

  // Assuming you have postId defined somewhere.
  const postId = event.target[1].getAttribute("name"); // Get the postId from the button's data attribute
 console.log(postId)
  try {
    const response = await fetch(`/api/dashRoutes/viewpost/${postId}`, {
      method: "POST", // Use 'POST' instead of 'Post' (uppercase)
      body: JSON.stringify({
        id: postId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // const responseData = await response.json();
      console.log("post brought out");
      console.log("post id: ", postId)
      // Do something with the responseData, e.g., display it on the page
    } else {
      alert(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// document.querySelector('.blogpost-form').addEventListener('submit', viewPost);
document.querySelector('#logout').addEventListener('click', logout);