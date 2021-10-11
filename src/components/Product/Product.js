import "./Product.css";

// function Product({
//   id,
//   title,
//   price,
//   description,
//   category,
//   image,
//   rating: { rate, count },
// }) {
//   return (
//     <div className="product">
//       <div className="product-image">
//         <img src={image} />
//       </div>
//       <div className="product-info">
//         <h5>{title}</h5>
//         <h6>{price}</h6>
//       </div>
//     </div>
//   );
// }

function Product() {
  return (
    <div className="product">
      <div className="product-image">
        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
      </div>
      <div className="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>
  );
}
export default Product;
