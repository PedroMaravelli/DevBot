import express from "express";

import cors from 'cors'
import { userController } from "./controllers/userController";
import { iaQuery } from "./controllers/iaQuery";


const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001




app.post('/api/auth', userController.login)
app.post('/api/devbot', iaQuery.query)




app.listen(PORT, () => { 
    console.log("Server running at PORT: ", PORT); 
  }).on("error", (error) => {
    
    throw new Error(error.message);
  })