import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewars/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { EditProductController } from "./controllers/product/EditProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

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
router.delete(
  "/category/remove",
  isAuthenticated,
  new RemoveCategoryController().handle
);

// File upload route
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.put(
  "/product/edit",
  isAuthenticated,
  upload.single("file"),
  new EditProductController().handle
);
export { router };
