import { Request, Response } from "express";

export const postUserContoller = (req : Request, res : Response) => {
       console.log(req.body);
       console.log('holussss');
    
}

export const getUserController = (req: Request, res: Response) =>{
    console.log("holuus");
    
}