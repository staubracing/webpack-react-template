# React Boilerplate for Webpack and Babel

## Description

This is a boilerplate for React applications using Webpack and Babel. It is intended to be used as a starting point for React projects that do not use Create React App.



## Prerequisites

- Node.js installed on your machine.
- Basic knowledge of terminal and command line operations.

# Installation

This guide covers the steps needed to set up a React application from scratch without using Create React App. It is intended to be used as a reference for future projects.

#### Setup Steps in the CLI

1. **Initialize the Project:**

        mkdir <Directory name>

        cd <Directory name>

        npm init -y

2. **Install React and ReactDOM:**
    
        npm install react react-dom

3. **Install Webpack and Babel:**

        npm install --save-dev webpack webpack-cli webpack-dev-server
        npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react


4. **Set Up Webpack Configuration:**

    Create a `webpack.config.js` file in the root of your project and add the necessary configuration.

5. **Configure Babel:**

    Create a `.babelrc` file in the root of your project and add presets for `@babel/preset-env` and `@babel/preset-react`.

6. **Add Loaders for CSS:**

        npm install --save-dev style-loader css-loader

    Add rules for `.css` files in `webpack.config.js`.

7. **HTML Template Setup:**

    Install and configure `html-webpack-plugin` to manage your `index.html` file.

8. **Create React Components:**

    Create an `App.js` and an `index.js` file inside a `src` directory.

9. **Update Package.json Scripts:**

    Add the following scripts to your `package.json` file for development and build processes. (If not already present)

```json
"scripts": {
  "start": "webpack serve --mode development --open",
  "build": "webpack --mode production"
}
```
10. start the Development Server

        npm start

11. Build the Production Version

        npm run build



## Technologies

#### React
#### Node.js

## Credits

#### Joseph Naber
#### Christopher Staub

