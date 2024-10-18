import { useState } from 'react';
import SearchBar from '../SearchBar';
import ProductInfoTable from '../ProductInfoTable';
import HealthConditionsList from '../HealthConditionsList';
// import Header from '../components/Header';

const products = [
  {
    name: 'LAYS',
    ingredients: [
      { name: 'Vegetable Oil', harm: 'Moderate', explanation: 'High in Omega-6 Fatty Acids, linked to inflammation.' },
      { name: 'Canola Oil', harm: 'High', explanation: 'High in processed fats, possible trans fats.' },
      { name: 'Sugar', harm: 'High', explanation: 'Increases risk of metabolic issues.' },
      { name: 'Maltodextrin', harm: 'Moderate', explanation: 'High glycemic index, can spike blood sugar levels.' },
      { name: 'Torula Yeast', harm: 'Moderate', explanation: 'Contains glutamates, possible reactions similar to MSG.' },
      { name: 'Caramel Color', harm: 'High', explanation: 'May contain carcinogenic compounds.' },
      { name: 'Yeast Extract', harm: 'Moderate', explanation: 'Contains glutamates, similar to MSG.' },
    ],
    healthConditions: [
      'Acid Reflux (GERD)', 'Obesity or Overweight', 'Heart Disease', 'High Blood Pressure (Hypertension)', 
      'Allergies or Sensitivities to MSG/Glutamates', 'Irritable Bowel Syndrome (IBS)'
    ],
    description: `LAYS contains ingredients that may pose risks to individuals with certain health conditions, 
      including heart disease, high blood pressure, obesity, and allergies to glutamates.`
  },
  // Add more products as needed...
];


function Home() {
  const [filteredProduct, setFilteredProduct] = useState(null);
  const healthConditions = [
    'Acid Reflux (GERD)', 'Obesity or Overweight', 'Heart Disease', 'High Blood Pressure (Hypertension)',
    'Allergies or Sensitivities to MSG/Glutamates', 'Irritable Bowel Syndrome (IBS)'
  ];

  const handleSearch = (searchTerm, selectedConditions) => {
    const product = products.find((p) => p.name.toLowerCase() === searchTerm.toLowerCase());
    if (product) {
      const matchedConditions = selectedConditions.filter((condition) =>
        product.healthConditions.includes(condition)
      );
      if (matchedConditions.length > 0) {
        alert(`Warning: This product is not suitable for the following conditions: ${matchedConditions.join(', ')}`);
      }
      setFilteredProduct(product);
    } else {
      alert('Product not found');
    }
  };

  return (
    <div className="App">
      {/* <Header/> */}
      <SearchBar 
        onSearch={handleSearch} 
        healthConditions={healthConditions} 
      />
      {filteredProduct && (
        <>
          <ProductInfoTable product={filteredProduct} />
          <HealthConditionsList conditions={filteredProduct.healthConditions} />
          <p>{filteredProduct.description}</p>
        </>
      )}
    </div>
  );
}

export default Home;
