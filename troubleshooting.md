Notes on troubleshooting

I have it so that the hello.js has no `import React from 'react';` statemt and it works fine and reneders the dev server.

But when you comment out the import statement in the app.js file it fails to render the dev server and you get an error in the console.

I have made sure everything is up to date and I have deleted the node_modules folder and reinstalled everything and it still fails.

I made sure the webpack file is set up correctly as far as I can tell.

I made sure the .babelrc file is set up correctly as far as I can tell. 

Accodrding to the React docs I should be able to leave out the import statement and it should work as of react 17   we are using 18 so it should work. I confirmed the version of react in the package.json file and also by console logging the version in the console.

Babel loadeer should convert/complie.

The thing i want to make sure of is that the babel loader is working correctly and that it is converting the jsx to js.  Also that the webpack is working correctly and that it is using the babel loader to convert the jsx to js.  

### so try this

Comment out the import statement in the app.js file and run the dev server and see that it fails or build and see that it fails.

Then uncomment the import statement in the app.js file and run the dev server and see that it works


Then uncomment the import statement in the app.js file and run npm start

You will see that it works when the import statement is not commented out and it fails when the import statement is commented out.

Take a look at the error in the console and see if you can figure out what is going on.

