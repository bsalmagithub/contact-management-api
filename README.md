
# Contact Management API

Welcome to the Contact Management API! This API allows you to manage contacts efficiently. Below is an overview of the project structure, how to set it up, and usage instructions.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [License](#license)

## Features
- User authentication (Login and Register)
- Manage contacts (Add, View, and Delete Contacts)
- Upload contacts via CSV file
- Responsive UI

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/bsalmagithub/contact-management-api
   cd contact-management-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   - Ensure you have MySQL installed and running.
   - Create a database named `contact_management` and update the database configuration in `utils/db.js`.

4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to access the application.

## Usage
- Use the provided links on the homepage to access different features of the API.
- Use tools like Postman or cURL to test the API endpoints directly.

## API Endpoints
- `GET /api/contacts`: Retrieve all contacts.
- `POST /api/contacts/add`: Add a new contact.
- `POST /api/auth/login`: User login.
- `POST /api/auth/register`: User registration.

## Project Structure
```
/contact-management-api
|-- /components         # React components
|-- /pages              # Next.js pages
|-- /styles             # CSS styles
|-- /utils              # Utility functions and database connection
|-- package.json        # Project dependencies
|-- README.md           # Project documentation
```
## Styling
The project uses a modular CSS approach. Styles are defined in the `styles/Home.module.css` file. Key styles include:
- Container styling for better layout and appearance.
- Styling for buttons, forms, and links for a cohesive UI.

## License
This project is licensed under the MIT License.

Feel free to contribute to the project by creating issues or submitting pull requests!

