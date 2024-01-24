import { Router } from "express";
import { postUserController , getUserController, putUserController, deleteUserController, getOneUserController} from "../controllers/user.controllers";


const router = Router();

router.get ("/users", getUserController)

router.post("/users", postUserController)

router.put("/users/:id", putUserController)

router.delete("/users/:id", deleteUserController)

router.get("/users/:id", getOneUserController)


export default router;