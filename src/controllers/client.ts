import { Request, Response } from "express";
import { prisma } from "../server";

export const readClient = async (req: Request, res: Response) => {
  try {
    const clientList = await prisma.client.findMany({
      include: {
        operator: true,
      },
    });
    res.status(200).json(clientList);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
