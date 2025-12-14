# Insta Lite

Insta Lite is a simple Instagram-style application built as part of the
**TRUEiGTECH Software Engineer Task Round**.

The project demonstrates backend API development, database design,
authentication, and basic frontend integration.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication

### Frontend
- Angular
- Bootstrap

---

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

---

## Database Design

Tables used:
- users
- posts
- followers
- likes
- comments

The schema supports required one-to-many and many-to-many relationships.

---

## Project Structure

