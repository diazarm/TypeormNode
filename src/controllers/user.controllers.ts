import { Request, Response } from "express";
import { User } from "../entities/Users";



export const postUserController = async(req : Request, res : Response) => {
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



export const getUserController = async(req: Request, res: Response) =>{
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error){
        return res.status(500).json({message : error.message})
    }
  }
}



export const putUserController = async(req : Request, res : Response) => {
    const {id} = req.params
    const {userName, email, isActive} = req.body
    try {
        const userId = parseInt(id, 10);
        const user = await User.findOne({ where: { id: userId } })
        if (!user) return res.status(500).json({message : "User does not exists"});
    
        user.userName = userName;
        user.email = email;
        user.isActive = isActive;
        user.save()
        return res.status(200).json('received ok!');
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message : error.message})
        }
    }
}



export const deleteUserController = async (req: Request, res: Response)=>{
    const {id} = req.params;
    try {
        const userId = parseInt(id, 10);
        const user = await User.delete({id : userId })
        if (user.affected === 0){
            return res.status(400).json({ message : 'user not found'})    
        }
            return res.status(200).json({message:'deleted successfully!'})
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message : error.message})
    }}
}
//localhost:4000/botilleria?names=nico   {names:nico}     respuesta = [{nico1, nico2, nico3}]   
//? setResultado(respuesta)   
//!  const [resultado, setResultado] = useState([])

export const getOneUserController = async (req:Request,res:Response)=>{
    const {id} = req.params;
    try {
        const userId = parseInt(id, 10);
        const user = await User.findOne({ where: { id: userId } })
        if (!user) return res.status(400).json({message : "User does not exists"});
        return res.status(200).json(user)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message : error.message})}
    }
}