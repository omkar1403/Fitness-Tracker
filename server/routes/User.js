import express from "express";
import { UserLogin, UserRegister, addWorkout, getUserDashboard, getWorkoutsByDate } from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.post("/workout", verifyToken, addWorkout);
router.get("/workout", verifyToken, getWorkoutsByDate);



export default router;