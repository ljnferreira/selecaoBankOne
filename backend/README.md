# Product Manager API

Product Manager API is an mini product manager made with nodejs as a part of the test from an potential employer.

## Installation

### Pre-requisites
  
  * Node v12.19.0 (I suggest you to install with [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) for more convenience).
  * [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)
  * Git

  Run on bash:
  
  ```bash
    git clone https://github.com/ljnferreira/selecaoBankOne.git
  ```

  ```bash
    cd selecaoBankOne/backend
  ```

  ```bash
    yarn install or npm install
  ```

  ```bash
    yarn dev or npm run dev
  ```

  If you followed all the steps correctly, the API will be listening on the port 5000 of your machine.

## Usage

  There are 5 (until now) routes with those method types on the api:
  
    * POST /products that will create a new product;
    * POST /products/bydate that will return an object with quantity of an product registered between 2 dates;
    * GET /products that return a list off all products and their respective details;
    * GET /products/:id that will return all details of an product with the specified id;
    * DELETE /products/:id that will delete a product with the specified id;

  To create a new product you shall send a request on route /products/bydate with POST method with a request body following the examples bellow:

  ```javascript
    //clothing product
    {
      "name": "name",
      "price": 0.00,
      "categoryId": 1,
      "color": "color",
      "description": "description"
    }

    //food genre product
    {
      "name": "name",
      "price": 0.00,
      "categoryId": 2,
      "fabricationDate": "2020-11-15T03:00:00.000Z", //Javascript Date
      "measurementUnit": "Kg", //kilogram or liter
      "perishable": true, //boolean - true or false
      "validUntil": "2020-11-15T03:00:00.000Z" //only in case of perishable be true
    }
  ```
  and this action will return an object with this format and data types:

  ```javascript
    {
      "name": "name",
      "price": 00.00,
      "registrationDate": "11/25/2020",
      "categoryId": 1,
      "code": 19
    }
  ```

  To get the quantity of an determined product with a specific name you shall send a request on
  route /products/bydate with POST method with a request body following the example bellow:

  ```javascript
    {
      "initialDate": "2020-11-23T00:00:00.000Z", //Javascript Date
      "finalDate": "2020-11-25T23:59:59.000Z", //Javascript Date
      "name": "product name" //the exact name of one product
    }
  ```

  and this action will return an object with this format and data types:

  ```javascript
    {
      name: "name",
      quantity: 0.0
    }
  ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)