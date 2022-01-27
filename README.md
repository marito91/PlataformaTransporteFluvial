# PlataformaTransporteFluvial

This project was created using Nicepage for the use of CSS and HTML. Other changes were made when adapting the logic. This page works on computers only, as the mobile version is not done yet.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Which is going to run the app in development mode on[http://localhost:3000](http://localhost:3000) which you can view in the browser.
The page will reload if you make edits and will also let you know in the console when it sees any lint errors.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The app works with the Backend Side, uploaded on another repository called *BackendPlataformaTransporteFluvial* in this profile. The components fetch data from the backend side, so to upload the build to a server, the hostbase would need to be changed on the components (*which are connecting to a different local port*).
Data is fetched from the backend side, so it would have to be activated too, for the app to work.
