import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User ID is required");
        }

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
}

export { DetailUserService };