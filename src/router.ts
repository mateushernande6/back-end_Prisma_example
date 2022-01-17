import { Router, Request, Response } from "express";
import { UserServiceGet } from "../src/services/Users/UsersServiceGet";
import { UserServicePost } from "../src/services/Users/UsersServicePost";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  new UserServiceGet().execute(res);
});

router.post("/users", async (req: Request, res: Response) => {
  new UserServicePost().execute(req, res);
});

export { router };
