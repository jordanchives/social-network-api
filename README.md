# Social Network API

A RESTful API for a social network application, allowing users to interact with each other by creating thoughts, reacting to thoughts, adding friends, and more.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [License](#license)

## Description

This API provides the backend functionality for a social network application. Users can create accounts, share their thoughts, react to other users' thoughts, add friends, and perform various other social interactions.

## Features

- User authentication and authorization
- CRUD operations for users and thoughts
- Reaction system for thoughts
- Adding and removing friends
- Pagination and sorting for retrieving data
- Error handling and validation

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jordanchives/social-network-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd social-network-api
   ```

3. Install the dependencies:

   ```bash
    npm install
   ```

4. Seed the database with sample data:

   ```bash
   npm run seed
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Use an API client like Insomnia Core or Postman to interact with the API.

## Preview

A video preview of the application can be found [here](https://jordanchives.github.io/social-network-api/assets/index.html)