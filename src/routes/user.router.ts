import { Router } from "express";
import { postUserContoller , getUserController, putUserController} from "../controllers/user.controllers";


const router = Router();

router.get ("/users", getUserController)
router.post("/users", postUserContoller)
router.put("/users/:id", putUserController)

export default router;