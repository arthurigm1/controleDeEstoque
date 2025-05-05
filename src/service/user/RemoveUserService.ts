import prismaClient from "../../prisma";
import { RemoveUserRequest } from "../../interface/user/RemoveUserRequest";

export class RemoveUserService {
  async execute({ id }: RemoveUserRequest) {
    if (!id) {
      throw new Error("ID incorrect");
    }

    const removeuser = await prismaClient.user.delete({
      where: {
        id: id,
      },
    });
    return removeuser;
  }
}
