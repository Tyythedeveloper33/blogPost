# Tech Blog CMS

## Overview

This project is a CMS-style blog site designed for developers to publish their tech-related articles, blog posts, and opinions. It follows the Model-View-Controller (MVC) architectural pattern, utilizing technologies like Handlebars.js for templating, Sequelize as the Object-Relational Mapping (ORM) tool, and the express-session npm package for authentication. The application is deployed on Heroku.

## User Experience

### Sign Up

- When users choose to sign up, they are prompted to create a username and password.
- Clicking the sign-up button saves user credentials and logs them into the site.

### Returning Users

- Returning users are prompted to enter their username and password to sign in.
- Once signed in, users see navigation links for the homepage, dashboard, and the option to log out.


### Homepage Option
- Navigation links for the homepage and the dashboard are available, as well as an option to log out.
- Clicking on the dashboard option takes users to the dashboard where blogpost and their relative comments are held.
- Users can create blog posts .
- Clicking the button to add a new blog post prompts users to enter a title and content.
- Clicking the create button saves the new blog post

### Blog Posts

- Clicking on the homepage option displays existing blog posts with titles and creation dates.
- Clicking on an existing blog post reveals the post's title, content, creator's username, and creation date.
- Users can leave comments on blog posts.

### Navigation Links
- Clicking on the homepage option takes users back to the homepage.
- Clicking on viewpost link takes  users to view the individual post,where they can make comments on it

### Comments

- When users submit comments, they are saved, and the post is updated to display the comment,[the commenter's username, and the date created(coming soon)].


### Managing Posts

- In the dashboard, users can delete or update their existing posts.(coming soon)

### Logging Out

- Clicking the logout option in the navigation signs users out.

### Session Timeout

- Users who are idle for a set time can still view posts and comments but must log in again before adding, updating, or deleting posts.(coming soon)

## Mock-Up(heroku)

View the application's functionality in this [live app](https://blogstarzz-dd5d1fbc8b57.herokuapp.com/).

## Technologies Used

- Express.js for creating the API.
- Handlebars.js for rendering views.
- MySQL2 and Sequelize for database interaction.
- dotenv for managing environment variables.
- bcrypt for password hashing.
- express-session and connect-session-sequelize for authentication.


## License
This project is licensed under the MIT License.

## Author
Tyler Webster