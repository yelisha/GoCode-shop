import "./Products.css";
import Product from "../Product/Product";

// function Products({ products }) {
//   return (
//     <section className="products">
//       {products.map((product) => (
//         <h1 key={Product.id}>
//           <Product
//             id={product.id}
//             title={product.title}
//             price={product.price}
//             description={product.description}
//             category={product.description}
//             image={product.image}
//             rating={product.rating}
//           />
//         </h1>
//       ))}
//     </section>
//   );

function Products() {
  return (
    <section className="products">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
}

export default Products;
