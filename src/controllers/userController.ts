import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
import { OAuth2Client } from 'google-auth-library'
import axios from 'axios'

const oauth2Client = new OAuth2Client()
const prisma = new PrismaClient()



export const userController = {
    login: async (req: Request, res: Response) => {
      
        const code = req.headers.authorization

        const response = await axios.post(
            'https://oauth2.googleapis.com/token',
            {
              code,
              client_id: process.env.ID_CLIENT_GOOGLE,
              client_secret: process.env.SECRET_KEY_GOOGLE,
              redirect_uri: process.env.GOOGLE_CALLBACK_URL,
              grant_type: 'authorization_code'
            })

       

        const accessToken = response.data.access_token;

        const userResponse = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );

          const userDetails = userResponse.data;

          const user = await prisma.user.create({
            data:{
              email: userDetails.email,
              name: userDetails.name,
              quantityQuestions: 1

            }
          })
          

        
        res.status(200).json(user)
        

    }
}