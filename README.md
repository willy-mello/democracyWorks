

## Starting the app

You will need two terminals open to run this app.

npm install dependencies, then:


### `npm start` for the React APP

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `node server.js`

This will get the express server running.<br>
You will also see any lint errors in the console.

### What Works

* The form updates state and submits information correctly.

* The requestMaker function from the utils correctly formats the request url and header.

### What Doesn't Work

I had issues getting information from request-promise. This is where I ran out of time. <br>

### Next steps

* Get JSON back from api, as I saw it in postman.

* Create a component for rendering data once it has been set to state inside Election Form

* Conditionally render requested election data

* Write tests






