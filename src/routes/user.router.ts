import { Router } from "express";
import { postUserContoller , getUserController} from "../controllers/user.controllers";


const router = Router();

router.get ("/hola", getUserController)


router.post("/user", postUserContoller)

export default router;