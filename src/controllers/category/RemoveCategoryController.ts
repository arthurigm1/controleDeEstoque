import { Request, Response } from "express";
import { RemoveCategoryService } from "../../service/category/RemoveCateogoryService";

export class RemoveCategoryController {
  async handle(request: Request, response: Response) {
    const id = request.query.id as string;

    const removeCategoryService = new RemoveCategoryService();

    try {
      const category = await removeCategoryService.execute({ id });
      return response.json({ message: "Category removed successfully!" });
    } catch (err) {
      return response.status(400).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
}
