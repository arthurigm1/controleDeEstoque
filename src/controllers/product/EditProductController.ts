import { Request, Response } from "express";
import { EditProductService } from "../../service/product/EditProductService";
import { EditProductRequest } from "../../model/interface/product/EditProductRequest";

export class EditProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      description,
      banner,
      product_id,
      amount,
    }: EditProductRequest = request.body;
    const editProductService = new EditProductService();

    try {
      const product = await editProductService.execute({
        name,
        price,
        description,
        banner,
        product_id,
        amount,
      });
      return response.json(product);
    } catch (err) {
      return response.status(400).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
}
