import prismaClient from "../../prisma";

export class ListCategoryService {
  async execute() {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc", // Order by name in ascending order
      },
    });

    return categories;
  }
}
