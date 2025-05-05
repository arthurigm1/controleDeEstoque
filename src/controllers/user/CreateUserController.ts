import { CreateUserService } from "../../service/CreateUserServicce";
import { Request, Response } from "express";
import { UserRequest } from "../../interface/user/UserRequest";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password }: UserRequest = request.body;
    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.execute({
        name,
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