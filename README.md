
# Fake Instagram

The project was created for my studies, for subjects "Frontend Development", "WEB Protocols" and "Databases II".

## Features

- Creating accounts
- Posting pictures
- Comments
- Chat
- Notifications
- Following users
- Feed page


## Tech Stack

**Client:** React

**Server:** Express.js

**Database:** MongoDB


## Run Locally

Clone the project

```bash
  git clone git@github.com:jbandurska/instagram-imitation.git
```

Go to the project directory

```bash
  cd instagram-imitation
```

Start database

```bash
  docker compose up -d 
```

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

In a new terminal, go to the client directory (instagram)

```bash
  cd instagram
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

The app should open at http://localhost:3000.
