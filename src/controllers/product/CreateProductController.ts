import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";
import { ProductRequest } from "../../model/interface/product/ProductRequest";
interface CustomRequest extends Request {
  file: {
    originalname: string;
    filename: string;
  };
}
export class CreateProductController {
  async handle(request: CustomRequest, response: Response) {
    const {
      name,
      description,
      price,
      category_id,
      banner,
      amount,
    }: ProductRequest = request.body;
    const createProductService = new CreateProductService();

    if (!request.file) {
      throw new Error("File not foundm, missing image");
    } else {
      const { originalname, filename: banner } = request.file;

      try {
        const product = await createProductService.execute({
          name,
          description,
          price,
          category_id,
          banner,
          amount,
        });
        return response.json(product);
      } catch (err) {
        return response.status(400).json({
          error:
            err instanceof Error ? err.message : "An unknown error occurred",
        });
      }
    }
  }
}
