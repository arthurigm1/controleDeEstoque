import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";
import { ListCategoryService } from "../../service/category/ListCategoryService";

export class ListCategoryController {
  async handle(request: Request, response: Response) {
    const listCategoryService = new ListCategoryService();

    try {
      const categories = await listCategoryService.execute();
      return response.json(categories);
    } catch (err) {
      return response.status(400).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
}
