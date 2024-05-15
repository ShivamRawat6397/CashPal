# CashPal

CashPal is a basic clone of the Paytm application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to sign up, sign in, view their dashboard, and send money to other users.

## Features

- **Sign Up:** Users can create an account by providing necessary details such as name, email, and password.
- **Sign In:** Existing users can log in to their accounts using their credentials.
- **Dashboard:** Upon successful authentication, users are directed to their dashboard where they can view their account details and perform various actions.
- **Send Money:** Users can send money to other users by specifying the recipient's details and the amount to be sent.

## Technologies Used

### Frontend
- **React:** A JavaScript library for building user interfaces.
- **React Router:** A routing library for React that enables navigation in the application.
- **Axios:** A promise-based HTTP client for making requests to the server.
- **Components:** Custom UI components such as buttons, input boxes, headings, etc., are used for building the frontend interface.

### Backend
- **Express.js:** A web application framework for Node.js used for building the server-side logic.
- **MongoDB:** A NoSQL database used for storing user and account information.
- **Mongoose:** An object data modeling (ODM) library for MongoDB and Node.js used for interacting with the MongoDB database.
- **JWT (JSON Web Tokens):** Used for authentication and authorization purposes.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express.js application.

## Screenshots

### Sign Up Page

![Screenshot (50)](https://github.com/ShivamRawat6397/CashPal/assets/85786765/a69ac52b-c912-4dce-87fc-b0efa128c40a)


### Sign In Page

![Screenshot (51)](https://github.com/ShivamRawat6397/CashPal/assets/85786765/5673d840-afe0-432f-9fe3-23086b182080)


### Dashboard

![Screenshot (52)](https://github.com/ShivamRawat6397/CashPal/assets/85786765/a581ee6b-d661-4b9c-8216-c6416c834a44)



### Send Money Page

![Screenshot (53)](https://github.com/ShivamRawat6397/CashPal/assets/85786765/f4414893-53a7-4d68-bbb3-38800f5bedc0)


## Project Structure

The project follows a standard MERN stack structure with separate directories for frontend and backend.

### Frontend Directory Structure
- **`src/pages/`:** Contains React components for different pages of the application such as Signup, Signin, Dashboard, and SendMoney.
- **`src/components/`:** Contains reusable UI components used across different pages.
- **`src/App.js`:** Main entry point of the React application where routes are defined using React Router.

### Backend Directory Structure
- **`routes/`:** Contains Express.js route handlers for different endpoints.
- **`middleware/`:** Contains middleware functions used for authentication.
- **`db/`:** Contains database models and schema definitions.
- **`config/`:** Configuration files including JWT secret.
- **`server.js`:** Entry point of the Express.js server where middleware, routes, and database connection are set up.

## Getting Started

1. **Clone the repository:** `git clone <repository-url>`
2. **Install dependencies:**
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
3. **Set up MongoDB:** Ensure MongoDB is installed and running on your local machine.
4. **Start the development server:**
   - Frontend: `cd frontend && npm start`
   - Backend: `cd backend && npm start`

## Authors

- Shivam Rawat

## Acknowledgments

- This project was inspired by [Paytm](https://paytm.com/) and built as a learning exercise in full-stack web development using the MERN stack.

Feel free to customize this README according to your project's specific details and requirements. Include the actual paths to the screenshots in the `![...](...)` markdown syntax.
