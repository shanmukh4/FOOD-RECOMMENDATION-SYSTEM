function ProductDetails({ product }) {
    return (
      <div className="product-details">
        <h2>{product.name}</h2>
        <ul className="ingredient-list">
          {product.ingredients.map((ingredient, index) => (
            <li key={index} className={ingredient.harmfulness}>
              <span>{ingredient.name}</span>
              <span>{ingredient.harmfulness === 'green' ? '🟢' : ingredient.harmfulness === 'yellow' ? '🟡' : '🔴'}</span>
              <p>{ingredient.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProductDetails;
  