import prismaClient from "../../prisma";
import { RemoveCategoryRequest } from "../../interface/category/RemoveCategoryRequest";

export class RemoveCategoryService {
  async execute({ id }: RemoveCategoryRequest) {
    if (!id) {
      throw new Error("ID is required");
    }

    const category = await prismaClient.category.delete({
      where: {
        id: id,
      },
    });

    return category;
  }
}
