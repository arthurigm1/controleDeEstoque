import { Request, Response } from "express";
import { RemoveUserService } from "../../service/user/RemoveUserService";

export class RemoveUserController {
  async handle(request: Request, response: Response) {
    const user_id = request?.query.user_id as string;
    const removeUserService = new RemoveUserService();

    try {
      const removeUser = await removeUserService.execute({ id: user_id });
      return response.status(200).send();
    } catch (err) {
      return response.status(400).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
}
