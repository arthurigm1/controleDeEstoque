import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";

export class DetailUserController {
  async handle(request: Request, response: Response) {
    const user_id = request?.user_id;
    // Assuming user_id is set in the request object by a middleware

    const detailUserService = new DetailUserService();

    try {
      const user = await detailUserService.execute(user_id);
      return response.json(user);
    } catch (err) {
      return response.status(400).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
}
