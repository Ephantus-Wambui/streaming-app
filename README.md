# Streaming App

Simple Node.js streaming app for clients who are connected to your local network.

# USAGE;

1) Clone the repo first, then create a folder called videos in your public folder.
2) Then create a .env file where you will store all your database connection details, and also your PORT number to be used by the server.
3) For secure connection you can create your SSL certificate and store them in a folder called config  in the root directory. Or you can generate a free ssl certificate using https://www.npmjs.com/package/make-cert.
4) After this spin up your server by running npm start for production mode or npm run dev for development server. This can only work after you've installed your dependencies, run npm install if you've not done so.
5) Go to your browser of choice, preferably chromium based browser, and run https://localhost:"your port number", or through your local network ip address, that is https://192.168.x.x:"your port number".
6) To upload files go to register account, enter your details then login to the app. After that you can start uploading files to your app, and stream them.

# Dependencies needed

node 14x or greater

npm 6x or greater

bcrypt, body-parser, connect-mongo, dotenv, ejs, express, express-fileupload, express-session, mongoose, morgan, slugify

# How to install dependencies

After cloning the repo, the depencies can be simply be installed by running, npm install. All of the necessary depencies will be installed to your machine.

# Note

# This app can run on any machine, macos, windows and also any linux based machine.

# Also I'm assuming you are already running mongodb instance in your local machine, if not you can install mongodb database or you can sign up to use mongodb atlas.
