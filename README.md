## TechNext-Blog
## [Live Demo](https://22technext-blog.netlify.app/)
## Tech used:
- React
- Use Context, 
- Hooks, 
- Routing,
- React Bootstrap for styling
- Material UI Icons
- Functional Component

## Features:
- User can see all the “Posts”
  - Load the first 10 posts as the page loads
  - “load more” button, which if clicked, load 10 more posts
- As a user, can see profile on navbar, By clicking -
  - See all his/her posts
  - Have the option to update the posts
  - Have the option to delete the posts
- User may add a new post with “Post title” and “Description”
- User see post details with respective comments along with the post on a separate page
- Visitor can see all the other users listed in a table. (I didn't use any plugin for the table)
    - Heading columns - “Name”, “Email”, “Website”
    - Option to sort columns with name, email. (ASC, DSC)
    - Option to search users from table name, email, website
    - Pagination page size (Number of users displaying per page. Eg: 3, 5, All) can
       be changeable
    - If user reload the page then the list according to the state
       (filter/sort/pagination/page size) before the reload
    - Clicking on a user’s name will take users to the corresponding user profile page
       where the details for that user will be shown as well as his/her all posts with
       pagination.
