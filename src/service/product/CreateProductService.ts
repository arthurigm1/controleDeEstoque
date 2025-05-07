import prismaClient from "../../prisma";

import { ProductRequest } from "../../model/interface/product/ProductRequest";

export class CreateProductService {
  async execute({
    name,
    description,
    price,
    category_id,
    banner,
    amount,
  }: ProductRequest) {
    if (!name || !description || !price || !category_id) {
      throw new Error("All fields are required");
    }

    const product = await prismaClient.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        category_id: category_id,
        banner: banner,
        amount: +amount,
      },
    });

    return product;
  }
}
