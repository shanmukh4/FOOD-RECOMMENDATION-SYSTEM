function ProductList({ products, onProductClick }) {
    return (
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} onClick={() => onProductClick(product)}>
            {product.name}
          </li>
        ))}
      </ul>
    );
  }
  
  export default ProductList;
  