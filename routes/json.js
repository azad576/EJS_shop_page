import express from "express";
import {
  getallproduct,
  getallsingleproduct,
  sendproduct,
  getdeleteproduct,
  showproductpage,
  showcreateproduct,
  showsingle,
  edited,
  updateproduct
} from "../controlers/json.js";
import { crateproductphoto } from "../utility/multer.js";

const router = express.Router();

router.post("/product", crateproductphoto, sendproduct);

router.get("/product", getallproduct);
router.get("/product/:slug", getallsingleproduct);
router.get("/product-delete/:slug", getdeleteproduct);

//Ejs route
router.get("/", showproductpage);
router.get("/create", showcreateproduct);
router.get("/single/:slug", showsingle);

router.get("/edite/:id", edited);
router.post("/update/:id",crateproductphoto, updateproduct);

export default router;
