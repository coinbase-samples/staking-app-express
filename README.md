# staking-app-express

Package providing an example server to utilize with Coinbase [Staking API](https://github.com/coinbase/staking-client-library-ts). It is built with NodeJS 18+ and ExpressJS

## Warning
This is a sample reference implementation, and as such is not built to be fully production-ready. 
Do not directly use this code in a customer facing application without subjecting it to significant load testing and a security review.

## Running staking-app-express

### Setup

Clone this repo:
```bash
git clone git@github.com:coinbase-samples/staking-app-express.git
```
From the [Coinbase Cloud Console](https://cloud.coinbase.com/) create a new Staking API project, download the api key, and save the key file in the cloned directory as `.coinbase_cloud_api_key.json`

Copy the sample.env to .env and fill in the values.

### Start Application
To start up the local server, run the following:
```bash
npm run start
```

This starts the application server on `localhost:3030`

## License
This library is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file.
