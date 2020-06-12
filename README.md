# Campus CRUD Project - Express Server w/ Sequelize

## Quick Start

To start up dev server with nodemon:

```shell
npm run dev
```

---

Please make sure to create a `.env` file and save the `LOCAL_DATABASE_PASSWORD` variable if you are working locally.

```shell
LOCAL_DATABASE_PASSWORD=somePassword123
```

If you have no password, please pass an empty string in single-quotes like so:

```shell
LOCAL_DATABASE_PASSWORD=''
```

If you are using a cloud-based database, you can save a `DATABASE_URL` variable like so:

```shell
DATABASE_URL=databaseurlWithNoQuotes
```

## Getting Started

You can either:

- [Fork and/or clone this repo as a starting point](#Clone-repo)
- [Use Express Generator and refactor your code](#Express-Generator)

## Clone repo

Clone the repo and set up with your own GitHub account. The boilerplate for this application will be in the `boilerplate` branch.

## Express Generator

You can use this Express Generator command, indicating the directory to build your project in instead of `my-app`:

```shell
npx express-generator --no-view --git my-app
```

It will not set a template engine (no need since you're creating an API). It will also create a `.gitignore` file for you.

Move into the directory and install dependencies

```shell
cd my-app
npm install
```

This is a good point to initialize a git repository and make your initial commit.

Install these dependencies via `npm install`

```shell
npm i compression dotenv helmet pgtools sequelize
```

## Nodemon

I recommend installing `nodemon`

```shell
npm i --save-dev nodemon
```

Add the following to the list of scripts in `package.json`:

```json
"dev": "nodemon ./bin/www"
```

Nodemon will automatically reload the server when file changes are detected.

```shell
npm run dev
```
