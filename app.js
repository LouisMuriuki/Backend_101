const express = require("express");
const app = express();
const { products } = require("./products");

app.get("/", (req, res) => {
  res.send('<h1>HOME PAGE</hi><br/><a href="/api/products">Products</a> ');
});

app.get("/api/products", (req, res) => {
  console.log(products);
  const newProducts = products.map((product, i) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id === productID);
  if (!singleProduct) {
    return res.status(404).send("product does not exixst");
  }
  console.log(singleProduct);
  res.json(singleProduct);
});
app.get("/api/v1/query", (req, res) => {
  const{search,limit}=req.query
  let sortedproducts=[...products]
  if(search){
    sortedproducts=sortedproducts.filter((products)=>{
        return products.name.toLowerCase().startsWith(search.toLowerCase())
    })
  }
  if(limit){
    sortedproducts=sortedproducts.slice(0, Number(limit))
  }
  if(sortedproducts.length<1){
  //  res.status(200).send("no products matched your query")
   return res.status(200).json({sucess:true,data:[]})
  }
console.log(sortedproducts) 
res.status(200).json(sortedproducts)
});

app.all("*", (req, res) => {
  res.status(404).send("nada");
});
// app.post()
// app.put()
app.listen(5000, () => {
  console.log("we up ");
});
