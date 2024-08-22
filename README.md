# Products API

This is a products API built using [Node.js](https://nodejs.org/en), [Express](https://expressjs.com/), [MongoDB](https://mongodb.com/pt-br/docs/), [Mongoose](https://mongoosejs.com/) and [Docker](https://docs.docker.com/).

## Prerequisites

- Node
- Npm
- Docker 

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ingridflack/products-api.git
    ```
2. Add a .env file following the example below:
    ```bash
    DB_CONNECTION_STRING=mongodb://mongo:27017/products 
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```    
4. Run `npm run up` to build and run the containers
5. Run `npm run db:seed` to populate the database


## Features

- List all products; 
- Update a product;
- Delete a product;
- Filter products by category, brand, min/max price and name.
- List all categories;
- List all brands.

## Roadmap

- Unit tests;
