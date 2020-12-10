# Product Manager API

Product Manager API is an mini product manager made with nodejs as a part of the test from a potential employer.

## Installation

### Pre-requisites
  
  * Node v12.19.0 (I suggest you to install with [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) for more convenience).
  * [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)
  * Git

  Open bash on a directory of your choice and execute the following commands:
  
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

  There are 6 (so far) routes with these method types on the api:
  
    * POST /products that will create a new product;
    * POST /products/bydate that will return an object with quantity of an product registered between 2 dates;
    * GET /products that return a list off all products and their respective details;
    * GET /products/:id that will return all details of an product with the specified id;
    * GET /relatory that will return a list of product name, total value and quantity in stock;
    * DELETE /products/:id that will delete a product with the specified id;



  ### POST /create

  To create a new product, send a POST request to '/products/bydate' with the following payload:

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

  ### POST /products/bydate

  To get the quantity of a certain product in the inventory, send a POST request with
  the following payload:

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

  ### DELETE /products/:id

  This method deletes a product matching the specified id. It returns a success message if the product exists, or an error message if the product doesn't exist.

  ### GET /products/:id

  This method returns the detailed info of a product, when it exists. Else, it returns an error message. The returning varies depending on the product type:

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

  ### GET /products

  Return an array of objects with all product registries, regadless of type. 
  (Please, if you can contribute with implementation of tests and pagination I would be grateful.
  To se how contribute, take a look on the section bellow). 

  ```javascript
    [
      //clothing product
      {
        "name": "product 1",
        "price": 0.00,
        "categoryId": 1,
        "color": "color",
        "description": "description"
      },
      //food genre product
      {
        "name": "product 2",
        "price": 0.00,
        "categoryId": 2,
        "fabricationDate": "2020-11-15T03:00:00.000Z", //Javascript Date
        "measurementUnit": "Kg", //kilogram or liter
        "perishable": true, //boolean - true or false
        "validUntil": "2020-11-15T03:00:00.000Z" //only in case of perishable be true
      },
      //clothing product
      {
        "name": "product 3",
        "price": 0.00,
        "categoryId": 1,
        "color": "color",
        "description": "description"
      },
      //food genre product
      {
        "name": "product 4",
        "price": 0.00,
        "categoryId": 2,
        "fabricationDate": "2020-11-15T03:00:00.000Z", //Javascript Date
        "measurementUnit": "Kg", //kilogram or liter
        "perishable": true, //boolean - true or false
        "validUntil": "2020-11-15T03:00:00.000Z" //only in case of perishable be true
      },

    ]
  ```

  ### GET /summary

  Return an array of objects with the name, total value and quantity of a product: 

  ```javascript
    {
        "name": "product 1",
        "totalValue": 15.96,
        "quantity": 4
    },
    {
        "name": "product 2",
        "totalValue": 35.91000000000001,
        "quantity": 9
    }
]
  
  ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)