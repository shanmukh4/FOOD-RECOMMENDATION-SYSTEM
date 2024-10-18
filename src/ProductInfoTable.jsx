function ProductInfoTable({ product }) {
    return (
      <div className="product-info">
        <h2>{product.name} Ingredients</h2>
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Potential Harm</th>
              <th>Explanation</th>
            </tr>
          </thead>
          <tbody>
            {product.ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td>{ingredient.name}</td>
                <td>{ingredient.harm}</td>
                <td>{ingredient.explanation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductInfoTable;
  