import { Request, Response } from "express";
import { openai } from "../lib/openai";

import * as z from 'zod'


export const iaQuery = {
    query: async (req: Request, res: Response) => {

        const querySchema = z.object({
            query: z.string()
        })


        const {query} = querySchema.parse(req.body)

        const chatGptQuery = await openai.chat.completions.create({
            messages: [{"role": "system", "content": "You are an assistant who helps answer programming questions."},
            {"role": "user", "content": query},],
            model: "gpt-3.5-turbo",
            max_tokens: 100,
            
          });
        
          res.json(chatGptQuery.choices[0]).status(200)

         



    }
}