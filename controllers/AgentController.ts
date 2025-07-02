import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Agentai } from "../models/Agents";

const agentRepository = AppDataSource.getRepository(Agentai);

export const getAllAgents = async (req: Request, res: Response): Promise<void> => {
  try {
    const agents = await agentRepository.find();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch agents " });
  }
};

export const getAgentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const agent = await agentRepository.findOne({ 
      where: { id: parseInt(req.params.id) } 
    });
    
    if (!agent) {
      res.status(404).json({ error: "Agent not found" });
      return;
    }

    res.json(agent);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch agent" });
  }
};

export const createAgent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: "Name is required" });
      return;
    }

    const agent = agentRepository.create({
      name
    });

    const savedAgent = await agentRepository.save(agent);
    res.status(201).json(savedAgent);
  } catch (error) {
    res.status(500).json({ error: "Failed to create agent" });
  }
};

export const updateAgent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const agent  = await agentRepository.findOne({ 
      where: { id: parseInt(req.params.id) } 
    });
    
    if (!agent) {
      res.status(404).json({ error: "Agent not found" });
      return;
    }

    agent.name = name || agent.name;

    const updatedAgent = await agentRepository.save(agent);
    res.json(updatedAgent);
  } catch (error) {
    res.status(500).json({ error: "Failed to update agent" });
  }
};

export const deleteAgent = async (req: Request, res: Response): Promise<void> => {
  try {
    const agent  = await agentRepository.findOne({ 
      where: { id: parseInt(req.params.id) } 
    });
    
    if (!agent) {
      res.status(404).json({ error: "Agent not found" });
      return;
    }

    await agentRepository.remove(agent);
    res.json({ message: "Agent deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete agent" });
  }
}; 