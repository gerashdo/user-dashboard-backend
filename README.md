# User Dashboard Backend

### Steps to run the project
1. Clone the repository
2. Run `npm install` to install all the dependencies
3. Create __.env__ file in the root directory and add the following environment variables, you can use the __.env-example__ file as a reference and replace the values with your own
    - PORT=3000
    - MONGO_URL=your_mongo_db_url
4. Run `npm run dev` to start the development server

### Base URL
`http://localhost:3000/api/v1`

### API Endpoints
1. P0ST `/auth` - Login user
2. POST `/users` - Register user
3. GET `/users` - Get all users
4. GET `/users/:id` - Get user by id
5. PUT `/users/:id` - Update user by id
6. DELETE `/users/:id` - Delete user by id

Frontend repository can be found [here](https://github.com/gerashdo/users-dashboard)
