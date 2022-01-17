import { prisma } from "../../server";
import { Response } from "express";

export class UserServiceGet {
  async execute(res: Response): Promise<void> {
    const users = await prisma.user.findMany({
      include: { messages: true },
    });
    res.json(users);
  }
}
