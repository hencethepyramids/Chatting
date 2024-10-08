# Chatting

A real-time chat application built with Node.js, Express, and Socket.IO. This project aims to provide a seamless chatting experience with features like real-time messaging, user authentication, and responsive design.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-time messaging**: Instant communication between users.
- **User authentication**: Secure login and registration using JWT.
- **Responsive design**: Works on desktops, tablets, and mobile devices.
- **Chat rooms**: Ability to join different chat rooms.
- **Typing indicators**: See when other users are typing.
- **Message timestamps**: Messages include timestamps for better context.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/hencethepyramids/Chatting.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd Chatting
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:

    - Create a `.env` file in the root directory.
    - Add the necessary environment variables, such as:

        ```env
        PORT=3000
        JWT_SECRET=your_jwt_secret
        DATABASE_URL=your_database_url
        ```

5. **Start the application**:

    ```bash
    npm start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Register a new account or log in with an existing account.
- Join a chat room or start a private conversation with another user.
- Type your message and hit enter to chat in real-time with others.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web application framework for Node.js.
- **Socket.IO**: Enables real-time, bi-directional communication.
- **MongoDB**: NoSQL database for storing user data and messages.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **HTML/CSS/JavaScript**: Frontend technologies for building the user interface.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:

    ```bash
    git checkout -b feature/YourFeature
    ```

3. **Make your changes**.
4. **Commit your changes**:

    ```bash
    git commit -m 'Add feature: YourFeature'
    ```

5. **Push to the branch**:

    ```bash
    git push origin feature/YourFeature
    ```

6. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Ethan Ellerstein**
- Email: eellerstein@gmail.com (mailto:eellerstein@gmail.com)
- GitHub: [hencethepyramids](https://github.com/hencethepyramids)

---
