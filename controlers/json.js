import { createslug, generateUniqueID } from "../helfe_js/helper.js";
import fs from "fs";

export const getallproduct = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  if (productData.length == 0) {
    res.json({ massage: "no product found" });
  }
  res.json({ product: productData });
};

export const getallsingleproduct = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  const { slug } = req.params;
  const singleproduct = productData.find((data) => data.slug === slug);
  if (!singleproduct) {
    res.json({ massage: "single product data not found" });
    return;
  }
  res.json(singleproduct);
};

export const getdeleteproduct = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  const { slug } = req.params;
  const deleteddata = productData.filter((data) => data.slug !== slug);
  fs.writeFileSync("db/product.json", JSON.stringify(deleteddata));
  res.redirect('/')
};

export const sendproduct = (req, res) => {
  const { name, cell_price, regular_price } = req.body;
console.log(req.body);
  //validation
  if (!name || !cell_price) {
    res.json({ massage: "this two file are required" });
    return;
  }
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  const product = {
    id: generateUniqueID(),
    name,
    slug: createslug(name),
    cell_price,
    regular_price,
    product_photo: req.file.filename,
  };
  productData.push(product);
  fs.writeFileSync("db/product.json", JSON.stringify(productData));

  res.redirect("/");
};

//EJs controller show product

export const showproductpage = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());


  res.render("product",{products: productData});
};

export const showcreateproduct = (req, res) => {
  res.render("create");
};
//edite
export const edited = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  const { id } = req.params;
  const editeproduct = productData.find((data) => data.id === id);
  res.render("edite",{product:editeproduct});
};

export const showsingle = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  const { slug } = req.params;
  const singleproduct = productData.find((data) => data.slug === slug);
  res.render("single",{product:singleproduct});
};

// update product

export const updateproduct=(req,res)=>{
  const { id } = req.params;

  const { name, cell_price, regular_price } = req.body;
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
let photo_name=productData[productData.findIndex((data)=>data.id===id)].product_photo
if(req?.file?.filename){
  photo_name=req.file.filename
}
productData[productData.findIndex((data)=>data.id===id)]={
...productData[productData.findIndex((data)=>data.id===id)],
id:id,
slug:createslug(name),
name,
regular_price,
cell_price,
product_photo:photo_name
}
fs.writeFileSync("db/product.json", JSON.stringify(productData));

res.redirect('/')
}