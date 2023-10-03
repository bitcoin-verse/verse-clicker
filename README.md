# Verse Clicker

A simple addictive game that engages users to ‘click for verse’. Concept is based off [cookie clicker](https://orteil.dashnet.org/cookieclicker/) and other similar ‘incremental’ and ‘idle’ style games such as [adventure capitalist](https://kbhgames.com/game/adventure-capitalist).

Users will be able to make in-game purchases to improve their click-rate and additional bonuses. A global leaderboard will show users who have achieved the highest levels.


## Project

Project is setup using yarn workspaces. If project doesn't run try turning on workspaces with `yarn config set workspaces-experimental true
`

### Directory Structure

`/client` - Client files, created with Create React app

`/server` - Server files, express and socketio with Monogo database

## Developing

### Requirements

Add `.env` file in the `server` directory with the same content

```
DB_CONN_STRING=[monogodb conection string]
PORT=3001
INFURA_API_KEY=[infura api key]
```

### Running

In the root directory run the following...

#### `yarn start`

Starts server and client with concurrently. Client runs on port 3000 and server runs on port 3001


## Deploying

Deployments happen automaticaly with github actions.

NOTE: `.env` file from above should also be put in root directory (or secrets setup on docker service)

### Building & Running

#### `yarn build`

Builds both server and client (in that order). Build it output to the `dist` directory

#### `yarn start-serer`

Starts the server and serves files