import { Router } from "express";
import { postUserContoller , getUserController, putUserController, deleteUserController} from "../controllers/user.controllers";


const router = Router();

router.get ("/users", getUserController)

router.post("/users", postUserContoller)

router.put("/users/:id", putUserController)

router.delete("/user/:id", deleteUserController)

export default router;