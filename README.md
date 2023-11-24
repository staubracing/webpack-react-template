# Moto-Client

## Description

Moto-Client is a web/mobil application that allows Racers/Riders to keep track of their bikes, maintenance, track days, and racing activities.  It also provides a community forum for connecting with other Racers/Riders.

## Features

* Racer: Keep data on the rider/racer 
* Maintenance Logs: Keep track of maintenance activities and schedules (future Maint.).
* Maintenance record: place to keep a historical record: suspension refresh, oil change, tires, valve check, (store mileage on each)
* Bike Profiles: Keep track of your bikes and their specs.
* Tracks: Keep track of your favorite tracks and their specs.
* Track_Day_Logs: Keep track of your track day activities.
* Racing_Logs: Keep track of your racing activities.
* Community Forum: Connect and share experiences with other Racers/Riders.
* garage: represents a user's collection of vehicles
* vehicle: an individual bike
* tracks: represents different tracks, include coordinates for future weather related data
* settings: collection of settings for different parts of the bike
* setting_item: collection of items that would have settings (suspension, quickshifter, gearing / chain / sprockets, fuel map)

<!-- #### Flow Chart 

<img src="./public/appFlowChart.png" alt="Flowchart" width="350" height="250"> -->

## Prerequisites

- Node.js installed on your machine.
- Basic knowledge of terminal and command line operations.

# Installation

This guide covers the steps needed to set up a React application from scratch without using Create React App.



#### Setup Steps in the CLI

1. **Initialize the Project:**

        mkdir moto-client

        cd moto-client

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

