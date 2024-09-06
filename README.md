
# Chatbot Backend

This project is a backend service for a chatbot that answers programming-related questions using the OpenAI API. The backend is built with TypeScript, Express, and Prisma, using SQLite as the database. User authentication is managed via the Google OAuth API.



## Features

Programming Query Handling: Uses the OpenAI API to provide intelligent responses to programming-related questions.

Authentication: Secure user authentication with Google OAuth.

Database: Manages user data with SQLite, using Prisma as the ORM.

## Technologies Used

 - [TypeScript: Ensures strong typing and better scalability for JavaScript code.](https://www.typescriptlang.org)
 - [Express: A web application framework for Node.js.](https://expressjs.com/en/5x/api.html)
 - [Prisma: An ORM for type-safe database interaction.](https://www.prisma.io/docs/orm/overview/introduction)
  - [SQLite: A lightweight relational database engine.](https://www.sqlite.org/docs.html)
   - [Google OAuth API: Provides secure user authentication.](https://developers.google.com/identity/protocols/oauth2?hl=pt-br)
- [OpenAI API: Powers the chatbot's programming-related responses.](https://openai.com/api/)


## Deploy

Clone the repository:

```bash
  git clone https://github.com/PedroMaravelli/DevBot.git
  cd your-repo

```
Install dependencies:

```bash
    npm install
    npm i express 
    npm i @types/cors
    npm i @types/dotenv
    npm i @types/express
    npm i @types/node
    npm i prisma

```

Run database migrations:

```bash
    npx prisma migrate dev

```
Start the server
```bash
    npx ts-node src/server.ts

```




## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.




## License

[This project is licensed under CC0 1.0 Universal](https://creativecommons.org)

