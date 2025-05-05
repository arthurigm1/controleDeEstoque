import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaclient from "../../prisma/index";
import { AuthRequest } from "../../interface/user/AuthRequest";

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    const user = await prismaclient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("Wrong email or password");
    }
    const passwordMatch = await compare(password, user?.password);
    if (!passwordMatch) {
      throw new Error("Wrong password");
    }
    const token = sign(
      {
        name: user?.name,
        email: user?.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user?.id,
        expiresIn: "30d",
      }
    );

    return { id: user?.id, name: user?.name, email: user?.email, token };
  }
}

export { AuthUserService };
