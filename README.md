# Insta Lite

Insta Lite is a simple Instagram-style application.The project demonstrates backend API development, database design,
authentication, and basic frontend integration.

##HOW TO RUN 
1. Clone the Repository
2. Add MySQL Database to your host by running schema.sql on your CLI.
3. Open the Terminal
4. Go to the path: instagram-backend
5. Install dependencies : npm install
6. Start the server: node index.js
7. For frontend go to path: instalite-frontend
8. Install dependencies: npm install
9. Start the server: ng serve
## Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication
## How to run 
1. Open Terminal and go to backend folder:
cd instagram-backend
2. Install dependencies
npm install
3. Start server
   node index.js
### Frontend
- Angular
- Bootstrap

## How to run 
1. Open Terminal and go to frontend folder:
cd instagram-frontend
2. Install dependencies
npm install
3. Start server
ng serve
## Features Implemented

### User Authentication
- User Signup
- User Login
- JWT-based authentication for protected APIs

### Users & Follow System
- View list of users (excluding logged-in user)
- Follow and Unfollow users
- Followers and Following count
- User profile details

### Posts
- Create posts using Image URL and Caption
- View posts feed
- Each post displays image, caption, and username

### Likes
- Like and Unlike posts
- Like count stored in database
- Like count remains correct after page refresh

### Comments
- Add comments on posts
- Comments stored in database

## Database Design

Tables used:
- users
- posts
- followers
- likes
- comments
