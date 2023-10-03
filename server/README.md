# Verse Clicker Server

Backend websocket server for verse clicker

## Developing

### Add `.env` file with the following

```
DB_CONN_STRING=[monogodb conection string]
PORT=3001
INFURA_API_KEY=[infura api key]
```

In the project directory, you can run

### `yarn install`

Download dependencies

### `yarn develop`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser to see "hello world".


## Production Build

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn start`

Start production ready server

## Automated Deploys

Merge to master branch and deploys happen automatically