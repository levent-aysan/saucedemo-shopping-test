# SauceDemo Shopping Test

This repository contains an automated test framework to execute the following steps for the [SauceDemo](https://www.saucedemo.com/) site:

1. Navigate to the SauceDemo URL.
2. Login using the provided credentials.
3. Select the highest priced item (without using the "Sort By" option).
4. Add the selected highest priced item to the cart.

## Technology Stack

- **Framework:** Cypress
- **Language:** JavaScript

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/levent-aysan/saucedemo-shopping-test.git
    cd saucedemo-shopping-test
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Test

Execute the test using the Cypress Test Runner:

```sh
npx cypress open
 ```

Or run the test headlessly: 

```sh
npx cypress run
 ```