import express from "express";
import { addTask, deleteTask, getAllTask, getParticularTask, updateTask} from "../controllers/tasks.js";

const router = express.Router();

router.post("/addtask", addTask); 
router.get("/task", getAllTask);
router.get("/task/:id", getParticularTask); 
router.put("/task/:id", updateTask); // not working       
router.delete("/task/:id", deleteTask); 



export default router;
