import express from "express";
import { deleteUser, getAllUsers, getBookingsOfUser, getUserById, login, signup, updateUser } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/",getAllUsers);
userRouter.post("/signup",signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.get("/bookings/:id", getBookingsOfUser);
export default userRouter;
