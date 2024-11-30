# User Management System

## Overview
This project is a User Management System built using React.js and Material-UI. It features login authentication, user data management, and settings management. The application demonstrates the integration of modern libraries like Formik for form handling, Yup for validation, and Axios for API interactions.

## Features

1. **Login System:**
   - Secure login functionality using Formik and Yup for form validation.
   - Handles user authentication and maintains session state.

2. **User Management:**
   - Display user data in a dynamic table.
   - Add, edit, and delete user data.
   - Search functionality to filter users based on input.

3. **Settings:**
   - Logout functionality to clear user sessions.

4. **Material-UI Integration:**
   - Consistent and modern UI using Material-UI components.
   - Custom theme with primary and secondary colors.

5. **Routing:**
   - Navigation between Home, User Data, and Settings pages using React Router.
   - Protected routes to ensure only authenticated users access certain pages.

## Tech Stack

- **Frontend:** React.js
- **UI Library:** Material-UI
- **Routing:** React Router
- **Form Management:** Formik
- **Validation:** Yup
- **HTTP Client:** Axios
- **Toast Notifications:** React Toastify

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management.git
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Folder Structure

```
user-management/
├── public/           # Public assets
├── src/              # Source code
│   ├── components/   # React components
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Settings.js
│   │   └── UserData.js
│   ├── App.js        # Main application component
│   ├── index.js      # Entry point
│   └── theme.js      # Custom Material-UI theme
└── package.json      # Project metadata and dependencies
```

## Custom Theme
The application uses a custom Material-UI theme to ensure a consistent and modern design. The primary color is light blue (#4B95D6), and the secondary color is light gray (#F5F6F9).

## Key Components

### `Login`
- Handles user authentication.
- Uses Formik for state management and Yup for validation.

### `Home`
- Welcomes the user after successful login.
- Provides navigation buttons to access user data and settings.

### `UserData`
- Displays a table of user data fetched from an API.
- Features add, edit, and delete functionality.

### `Settings`
- Allows the user to log out and clear session data.

## API
The application uses `https://jsonplaceholder.typicode.com/users` as a placeholder API to fetch and manage user data.

## Deployment
The application can be deployed to any hosting platform supporting React.js, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### To build for production:

```bash
npm run build
# or
yarn build
```

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your commit message"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

## Acknowledgments

- [Material-UI](https://mui.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

