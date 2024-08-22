# Financial Jargon Dictionary

## Description
The Financial Jargon Dictionary is a web application designed to demystify complex financial terms for users of all backgrounds. It provides an easy-to-use interface for searching, filtering, and learning about various financial concepts.

## Features
- **Featured Term**: Displays a randomly selected financial term on each page load.
- **Search Functionality**: Allows users to search for specific financial terms.
- **Category and Difficulty Filters**: Enables users to filter terms by category and difficulty level.
- **Comprehensive Database**: Includes a wide range of financial terms with explanations, examples, and pronunciations.
- **Responsive Design**: Ensures a seamless experience across different device sizes.

## Technologies Used
- Frontend:
  - React
  - TypeScript
  - Axios for API calls
  - CSS for styling
- Backend:
  - Node.js
  - Express.js
  - PostgreSQL database

## Setup and Installation
1. Clone the repository: git clone https://github.com/ABurfoot/financial-jargon-dictionary.git
2. Navigate to the project directory:cd financial-jargon-dictionary
3. Install dependencies for both frontend and backend:
     - Install node.js from https://www.nodejs.org
     - Install PostgreSQL from https://www.postgresql.org
     - npm create vite@latest my-react-app -- --template react-ts
     - npm install axios
     - npm install express
4. Set up the PostgreSQL database:
  - Create a new database named `financial_jargon_dictionary`
  - Run the SQL scripts in `backend/database/financial_jargon_dictionary.sql`
5. Configure environment variables:
  - Create a `.env` file in the backend directory
  - Add the following variables: 
    ```
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=financial_jargon_dictionary
    DB_HOST=localhost
    DB_PORT=5432
    ```
6. Start the  backend server:
  - cd backend
  - npm start
7. Start the frontend server:
  - cd frontend
  - npm start
8. Open your browser and navigate to the port specified by Vite, which will be most likely `http://localhost:5173`

## Usage
- Use the search bar to find specific financial terms.
- Apply category and difficulty filters to narrow down the list of terms.
- Click on individual terms to view detailed explanations and examples.
- The featured term at the top of the page changes with each reload, offering a new learning opportunity every time.

## Contact
Project Creator: ABurfoot

Project Link: https://github.com/ABurfoot/financial-jargon-dictionary


