# Simple CRUD API

This is simple REST API developed using Express for learning purpose. 
Followed the Crash Course by [Traversy Media](https://www.youtube.com/user/TechGuyWeb) - [Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)

## Requirements

For development, you will only need [Node.js](https://nodejs.org/) and [NPM](https://docs.npmjs.com/cli/v7/commands/npm).

```bash
node --version

npm --version
```


## Installation

```bash
git clone https://github.com/gauravburjwal/members-crud-api.git
cd members-crud-api
```


Use the [npm](https://docs.npmjs.com/cli/v7/commands/npm) to install dependencies.

```bash
npm install
```

## Usage

Run the server using 

```bash
npm start
```

* Server will run on PORT 5000. 
* Add a new member using the form on homepage or using the API.

| Method | URL                                   |
| ------ | ------------------------------------- |
| GET    | http://localhost:5000/api/members     |
| GET    | http://localhost:5000/api/members/:id |
| POST   | http://localhost:5000/api/members     |
| PUT    | http://localhost:5000/api/members/:id |
| DELETE | http://localhost:5000/api/members/:id |


## License
[MIT](https://choosealicense.com/licenses/mit/)