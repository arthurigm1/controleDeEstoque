import { NextFunction, Request, Response } from "express";
import { Payload } from "../model/interface/user/Paylod";
import { verify } from "jsonwebtoken";
export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");
  try {
    //validar token

    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    request.user_id = sub;
    return next(); // deixa que a requisicao prossiga
  } catch (err) {
    return response.send(401).end();
  }
}
