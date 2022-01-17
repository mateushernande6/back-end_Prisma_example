import { prisma } from "../../server";
import { Request, Response } from "express";

export class UserServicePost {
  async execute(
    req: Request,
    res: Response
  ): Promise<void | Response<any, Record<string, any>>> {
    const { email, name } = await req.body;
    const userExists = await prisma.user.findFirst({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ Error: "User already exists" });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.json(user);
  }
}
