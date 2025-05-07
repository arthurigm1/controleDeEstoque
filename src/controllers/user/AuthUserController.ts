import { Request, Response } from "express";
import { AuthUserService } from "../../service/user/AuthUserService";
import { AuthRequest } from "../../model/interface/user/AuthRequest";

export class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password }: AuthRequest = request.body;
    const authUserService = new AuthUserService();

    try {
      const user = await authUserService.execute({
        email,
        password,
      });
      return response.json(user);
    } catch (err) {
      return response.status(400).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
}
