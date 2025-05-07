import prismaClient from "../../prisma";
import { EditCategoryRequest } from "../../model/interface/category/EditCategoryRequest";

export class EditCategoryService {
  async execute({ id, name }: EditCategoryRequest) {
    if (!id || !name) {
      throw new Error("ID and name are required");
    }

    const category = await prismaClient.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });

    return category;
  }
}
