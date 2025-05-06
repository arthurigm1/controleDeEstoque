import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewars/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
  return response.json({ ok: true });
});
// User routes
router.post("/register", new CreateUserController().handle);
router.post("/login", new AuthUserController().handle);
router.get("/user", isAuthenticated, new DetailUserController().handle);
router.delete(
  "/user/remove",
  isAuthenticated,
  new RemoveUserController().handle
);

// Category routes
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.put(
  "/category/edit",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get(
  "/category/all",
  isAuthenticated,
  new CreateCategoryController().handle
);
export { router };
