import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../models/user";

const userRepository = AppDataSource.getRepository(User);

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await userRepository.findOne({
      where: { id: parseInt(req.params.id) },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, name, password, role_id } = req.body;

    if (!email || !name || !password) {
      res.status(400).json({ error: "Email, name, and password are required" });
      return;
    }

    const user = userRepository.create({
      email,
      name,
      password,
      role_id: role_id || null,
    });

    const savedUser = await userRepository.save(user);
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, name, password, role_id } = req.body;
    const user = await userRepository.findOne({
      where: { id: parseInt(req.params.id) },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    user.email = email ?? user.email;
    user.name = name ?? user.name;
    user.password = password ?? user.password;
    user.role_id = role_id ?? user.role_id;

    const updatedUser = await userRepository.save(user);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await userRepository.findOne({
      where: { id: parseInt(req.params.id) },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    await userRepository.remove(user);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
