import { Request, Response } from "express";
import { User } from "../entities/Users";

export const postUserContoller = async(req : Request, res : Response) => {
    const {userName, email} = req.body
    try {
        //throw new Error('Error a proposito')
        const user = new User()
            user.userName=userName;
            user.email=email;
        await user.save()
            return res.status(200).json(user)
       } catch (error) {
            if (error instanceof Error){
            return res.status(500).json({message: error.message})  
            }
       }       
}

export const getUserController = (req: Request, res: Response) =>{
  let userId= req.params.userId;
    
}