import { Request,Response } from "express";
import { EditCategoryService } from "../../service/category/EditCategoryService";

export class EditCategoryController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const id = request.query.id as string; // Assuming you're passing the ID as a query parameter
    
        const editCategoryService = new EditCategoryService();
    
        try {
        const category = await editCategoryService.execute({
            id,
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