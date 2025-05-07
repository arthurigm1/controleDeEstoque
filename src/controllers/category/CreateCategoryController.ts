import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";
import { CategoryRequest } from "../../model/interface/category/CategoryRequest";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name }: CategoryRequest = request.body;
    const createCategoryService = new CreateCategoryService();

    try {
      const category = await createCategoryService.execute({
        name,
      });
      return response.json(category);
    } catch (err) {
      return response.status(400).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
}
