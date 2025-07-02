import { Router } from "express";
import {getAllAgents,getAgentById,createAgent, updateAgent, deleteAgent,} from '../controllers/AgentController'
const router = Router();

router.get("/", getAllAgents);
router.get("/:id", getAgentById);
router.post("/", createAgent);
router.put("/:id",  updateAgent);
router.delete("/:id", deleteAgent);

export default router; 