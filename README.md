# To-do-list Application

Welcome to the To-do-list application. This is a simple yet effective tool to manage your daily tasks.

## Getting Started

To get the app running locally on your machine, follow the steps below:

### Prerequisites

- **Node.js**: Version `18.13.0` or above.
- **npm**: Version `8.19.3` or above.

Ensure you have the desired versions of Node.js and npm installed. You can check your versions using:

```
node -v
npm -v
```

### Running the Application

#### Development Mode

In development mode, the application can be started with live-reloading using `nodemon`. If you don't have `nodemon` installed, you can install it as a dev dependency:

```
npm install --save-dev nodemon
```

To run the app in development mode:
```npm run dev```

#### Production Mode

For production mode, simply execute:

```npm start```

This will start the application without any live-reloading features.

### Configuration

**Port**:
- By default, the application runs on port `3000`.

**Overriding the Default Port**:
- If you wish to run the application on a different port, set the `PORT` environment variable to your desired value before starting the app.

  For example:
  ```PORT=8080 npm start```
