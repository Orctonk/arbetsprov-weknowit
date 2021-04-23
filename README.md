# CityPop 
This application was written as part of a skill assessment for We Know IT.

## Getting Started
### Dependencies
* This application uses NodeJS and NPM to run and manage packages used. These can both be installed from the official [NodeJS](https://nodejs.org/en/download/) website.
* Expo is used to run the development server. The *expo-cli* npm module can be installed globally by issuing:
    > npm install -g expo-cli

### Running the app
After expo is installed the development server can be started by issuing:
> npm start

This will open a web page with a QR code, to run the application on your local device, install the Expo app and click *Scan QR Code* and scan the QR code.

### Troubleshooting
If starting the app results in a *SocketTimeoutException*, the ports 19000 and 19001 might have to be opened for TCP connections. Please refer to the relevant OS guide on how to do this.

If this does not work the development server might have to bee started in tunneling mode instead. To do this, add *--tunnel* to the start command