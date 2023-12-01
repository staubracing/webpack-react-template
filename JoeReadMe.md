Joe

I have it so that the hello.js has no import statemt and it work (npm start) 

But when you comment out the import statement in the app.js file it fails (npm start)

I have made sure everything is up to date and I have tried to reinstall node and npm

I made sure the webpack file is set up correctly

I made sure the .babelrc file is set up correctly 

Accodrding to the React docs I should be able to leave out the import statement and it should work as of react 17   we are using 18

Babel loadeer should convert/complie.





### so try this

Comment out the import statement in the app.js file and run npm start

Then uncomment the import statement in the app.js file and run npm start

You will see that it works when the import statement is commented out and it fails when the import statement is not commented out

ALso see the error in the console  

