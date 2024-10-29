import { useState,useEffect } from 'react';
import SearchBar from '../SearchBar';
import ProductInfoTable from '../ProductInfoTable';
import "./home.css"
// const products = [
//   {
//     name: 'LAYS',
//     ingredients: [
//       { name: 'Canola Oil', harm: 'High', explanation: 'High in processed fats, possible trans fats.' },
//       { name: 'Sugar', harm: 'High', explanation: 'Increases risk of metabolic issues.' },
//       { name: 'Maltodextrin', harm: 'Moderate', explanation: 'High glycemic index, can spike blood sugar levels.' },
//       { name: 'Caramel Color', harm: 'High', explanation: 'May contain carcinogenic compounds.' },
//       { name: 'Yeast Extract', harm: 'Moderate', explanation: 'Contains glutamates, similar to MSG.' },
//     ],
//     healthConditions: [
//       'Acid Reflux (GERD)', 'Obesity or Overweight', 'Heart Disease', 'High Blood Pressure (Hypertension)', 
//       'Allergies or Sensitivities to MSG/Glutamates', 'Irritable Bowel Syndrome (IBS)'
//     ],
//     description: `LAYS contains ingredients that may pose risks to individuals with certain health conditions, 
//       including heart disease, high blood pressure, obesity, and allergies to glutamates.`,
//   },
//   {
//     name: 'Cheetos',
//     ingredients: [
//       { name: 'Cheddar Cheese', harm: 'Moderate', explanation: 'High in sodium and saturated fats.' },
//       { name: 'Vegetable Oil', harm: 'Moderate', explanation: 'High in unhealthy fats.' },
//       { name: 'Artificial Flavor', harm: 'High', explanation: 'May cause allergic reactions in some individuals.' },
//       { name: 'Monosodium Glutamate (MSG)', harm: 'High', explanation: 'Can trigger sensitivity reactions.' },
//     ],
//     healthConditions: [
//       'Heart Disease', 'High Blood Pressure (Hypertension)', 'Obesity or Overweight', 'Allergies or Sensitivities to MSG/Glutamates'
//     ],
//     description: `Cheetos are high in sodium and may not be suitable for individuals with heart issues or high blood pressure.`
//   },
//   {
//     name: 'Pringles',
//     ingredients: [
//       { name: 'Dehydrated Potato Flakes', harm: 'Moderate', explanation: 'Processed, can have high sodium levels.' },
//       { name: 'Vegetable Oil', harm: 'Moderate', explanation: 'High in unhealthy fats.' },
//       { name: 'Flavor Enhancers', harm: 'High', explanation: 'May include MSG or similar additives.' },
//       { name: 'Salt', harm: 'High', explanation: 'Can contribute to high blood pressure.' },
//     ],
//     healthConditions: [
//       'High Blood Pressure (Hypertension)', 'Heart Disease', 'Obesity or Overweight'
//     ],
//     description: `Pringles contain high levels of sodium and unhealthy fats, making them unsuitable for some health conditions.`
//   },
//   {
//     name: 'Doritos',
//     ingredients: [
//       { name: 'Vegetable Oil', harm: 'Moderate', explanation: 'High in unhealthy fats.' },
//       { name: 'Cheddar Cheese', harm: 'Moderate', explanation: 'High in sodium and saturated fats.' },
//       { name: 'Artificial Colors', harm: 'High', explanation: 'Potential allergic reactions.' },
//     ],
//     healthConditions: [
//       'Heart Disease', 'High Blood Pressure (Hypertension)', 'Obesity or Overweight', 'Allergies or Sensitivities to Artificial Colors'
//     ],
//     description: `Doritos are high in sodium and fats, and may not be suitable for those with heart conditions.`
//   },
//   {
//     name: 'Oreos',
//     ingredients: [
//       { name: 'Sugar', harm: 'High', explanation: 'High sugar content, may cause metabolic issues.' },
//       { name: 'Palm Oil', harm: 'High', explanation: 'High in saturated fat.' },
//       { name: 'Artificial Flavor', harm: 'High', explanation: 'Potential for allergic reactions.' },
//     ],
//     healthConditions: [
//       'Obesity or Overweight', 'Diabetes', 'Heart Disease'
//     ],
//     description: `Oreos are high in sugar and fats, making them unsuitable for individuals with diabetes or weight issues.`
//   },
//   {
//     name: 'Snickers',
//     ingredients: [
//       { name: 'Sugar', harm: 'High', explanation: 'High sugar content, can spike blood sugar levels.' },
//       { name: 'Hydrogenated Palm Oil', harm: 'High', explanation: 'Trans fats risk.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease', 'Nut Allergies'
//     ],
//     description: `Snickers are high in sugar and may pose risks for those with diabetes or nut allergies.`
//   },
//   {
//     name: 'Kit Kat',
//     ingredients: [
//       { name: 'Sugar', harm: 'High', explanation: 'High sugar content, may cause metabolic issues.' },
//       { name: 'Palm Oil', harm: 'High', explanation: 'High in saturated fats.' },
//     ],
//     healthConditions: [
//       'Obesity or Overweight', 'Diabetes', 'Heart Disease'
//     ],
//     description: `Kit Kat bars are high in sugar and fats, unsuitable for those with diabetes or weight issues.`
//   },
//   {
//     name: 'Gatorade',
//     ingredients: [
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Can cause metabolic issues.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease'
//     ],
//     description: `Gatorade contains high sugar levels, making it unsuitable for individuals with diabetes or weight issues.`
//   },
//   {
//     name: 'Mountain Dew',
//     ingredients: [
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Can cause metabolic issues.' },
//       { name: 'Artificial Colors', harm: 'High', explanation: 'Potential for allergic reactions.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease', 'Caffeine Sensitivity'
//     ],
//     description: `Mountain Dew contains high sugar and caffeine levels, unsuitable for those with diabetes or caffeine sensitivity.`
//   },
//   {
//     name: 'Twinkies',
//     ingredients: [
//       { name: 'Sugar', harm: 'High', explanation: 'High sugar content, can lead to metabolic issues.' },
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Linked to obesity and diabetes.' },
//       { name: 'Partially Hydrogenated Oils', harm: 'High', explanation: 'Contains trans fats, harmful for heart health.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease'
//     ],
//     description: `Twinkies are high in sugar and unhealthy fats, making them unsuitable for individuals with diabetes or heart conditions.`
//   },
//   {
//     name: 'Fritos',
//     ingredients: [
//       { name: 'Corn Oil', harm: 'High', explanation: 'High in unhealthy fats.' },
//       { name: 'Salt', harm: 'High', explanation: 'Contributes to high blood pressure.' },
//     ],
//     healthConditions: [
//       'High Blood Pressure (Hypertension)', 'Heart Disease', 'Obesity or Overweight'
//     ],
//     description: `Fritos are high in sodium and unhealthy fats, unsuitable for individuals with high blood pressure or heart issues.`
//   },
//   {
//     name: 'M&M’s',
//     ingredients: [
//       { name: 'Sugar', harm: 'High', explanation: 'High sugar content, can spike blood sugar levels.' },
//       { name: 'Artificial Colors', harm: 'High', explanation: 'Potential for allergic reactions.' },
//       { name: 'Partially Hydrogenated Oil', harm: 'High', explanation: 'Contains trans fats, harmful for heart health.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease'
//     ],
//     description: `M&M’s are high in sugar and unhealthy fats, making them unsuitable for individuals with diabetes or heart issues.`
//   },
//   {
//     name: 'Pop-Tarts',
//     ingredients: [
//       { name: 'Sugar', harm: 'High', explanation: 'High sugar content, can lead to metabolic issues.' },
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Linked to obesity and diabetes.' },
//       { name: 'Partially Hydrogenated Oils', harm: 'High', explanation: 'Contains trans fats, harmful for heart health.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease'
//     ],
//     description: `Pop-Tarts are high in sugar and unhealthy fats, unsuitable for individuals with diabetes or heart conditions.`
//   },
//   {
//     name: 'coco cola',
//     ingredients: [
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Can lead to obesity and diabetes.' },
//       { name: 'Caramel Color', harm: 'High', explanation: 'May contain carcinogenic compounds.' },
//       { name: 'Phosphoric Acid', harm: 'High', explanation: 'Can harm bone health and contribute to kidney issues.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease', 'Tooth Decay'
//     ],
//     description: `Soda is high in sugar and harmful additives, making it unsuitable for individuals with diabetes or weight issues.`
//   },
//   {
//     name: 'Energy Drink',
//     ingredients: [
//       { name: 'Caffeine', harm: 'High', explanation: 'Excessive intake can lead to heart issues and anxiety.' },
//       { name: 'Taurine', harm: 'Moderate', explanation: 'May interact with medications and cause side effects.' },
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Linked to obesity and diabetes.' },
//     ],
//     healthConditions: [
//       'Heart Disease', 'Caffeine Sensitivity', 'Anxiety Disorders', 'Obesity or Overweight'
//     ],
//     description: `Energy drinks can lead to heart issues and anxiety due to high caffeine and sugar content.`
//   },
//   {
//     name: 'Sweetened Iced Tea',
//     ingredients: [
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Can contribute to metabolic syndrome.' },
//       { name: 'Artificial Flavors', harm: 'High', explanation: 'Potential for allergic reactions.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease'
//     ],
//     description: `Sweetened iced tea is high in sugar, making it unsuitable for individuals with diabetes or heart conditions.`
//   },
//   {
//     name: 'Fruit Punch',
//     ingredients: [
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Linked to obesity and diabetes.' },
//       { name: 'Artificial Colors', harm: 'High', explanation: 'Can cause allergic reactions.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease', 'Allergies to Artificial Colors'
//     ],
//     description: `Fruit punch is loaded with sugar and additives, unsuitable for those with diabetes or weight issues.`
//   },
//   {
//     name: 'Instant Noodles',
//     ingredients: [
//       { name: 'Preservatives (e.g., TBHQ)', harm: 'High', explanation: 'May cause cancer in high doses.' },
//       { name: 'Monosodium Glutamate (MSG)', harm: 'High', explanation: 'Can trigger sensitivity reactions.' },
//       { name: 'Palm Oil', harm: 'High', explanation: 'High in saturated fats.' },
//     ],
//     healthConditions: [
//       'Heart Disease', 'Obesity or Overweight', 'High Blood Pressure (Hypertension)', 'Allergies to MSG/Glutamates'
//     ],
//     description: `Instant noodles are high in unhealthy fats and preservatives, unsuitable for those with heart conditions.`
//   },
//   {
//     name: 'Frozen Pizza',
//     ingredients: [
//       { name: 'Partially Hydrogenated Oils', harm: 'High', explanation: 'Contains trans fats, harmful for heart health.' },
//       { name: 'Artificial Preservatives', harm: 'High', explanation: 'Potential long-term health risks.' },
//       { name: 'High Sodium Content', harm: 'High', explanation: 'Contributes to high blood pressure.' },
//     ],
//     healthConditions: [
//       'High Blood Pressure (Hypertension)', 'Heart Disease', 'Obesity or Overweight'
//     ],
//     description: `Frozen pizza is high in unhealthy fats and sodium, making it unsuitable for individuals with high blood pressure.`
//   },
//   {
//     name: 'Processed Cheese',
//     ingredients: [
//       { name: 'Artificial Colors', harm: 'High', explanation: 'Can cause allergic reactions.' },
//       { name: 'Preservatives', harm: 'High', explanation: 'Potential long-term health risks.' },
//       { name: 'Sodium', harm: 'High', explanation: 'High levels can lead to hypertension.' },
//     ],
//     healthConditions: [
//       'High Blood Pressure (Hypertension)', 'Heart Disease', 'Obesity or Overweight'
//     ],
//     description: `Processed cheese is high in sodium and unhealthy additives, unsuitable for individuals with heart conditions.`
//   },
//   {
//     name: 'Tortilla Chips',
//     ingredients: [
//       { name: 'Vegetable Oil', harm: 'Moderate', explanation: 'High in unhealthy fats.' },
//       { name: 'Salt', harm: 'High', explanation: 'Contributes to high blood pressure.' },
//     ],
//     healthConditions: [
//       'High Blood Pressure (Hypertension)', 'Heart Disease', 'Obesity or Overweight'
//     ],
//     description: `Tortilla chips are high in sodium and unhealthy fats, making them unsuitable for individuals with high blood pressure.`
//   },
//   {
//     name: 'Breakfast Cereals',
//     ingredients: [
//       { name: 'Sugar', harm: 'High', explanation: 'High sugar content, can spike blood sugar levels.' },
//       { name: 'Artificial Colors', harm: 'High', explanation: 'Potential for allergic reactions.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease'
//     ],
//     description: `Many breakfast cereals are high in sugar and artificial additives, unsuitable for those with diabetes.`
//   },
//   {
//     name: 'Canned Soup',
//     ingredients: [
//       { name: 'High Sodium Content', harm: 'High', explanation: 'Contributes to high blood pressure.' },
//       { name: 'Preservatives', harm: 'High', explanation: 'May have long-term health risks.' },
//     ],
//     healthConditions: [
//       'High Blood Pressure (Hypertension)', 'Heart Disease', 'Obesity or Overweight'
//     ],
//     description: `Canned soup often contains high sodium levels and preservatives, unsuitable for individuals with heart conditions.`
//   },
//   {
//     name: 'Store-Bought Salad Dressing',
//     ingredients: [
//       { name: 'High Fructose Corn Syrup', harm: 'High', explanation: 'Can lead to obesity and diabetes.' },
//       { name: 'Preservatives', harm: 'High', explanation: 'May have long-term health risks.' },
//     ],
//     healthConditions: [
//       'Diabetes', 'Obesity or Overweight', 'Heart Disease'
//     ],
//     description: `Many store-bought salad dressings are high in sugar and preservatives, unsuitable for those with diabetes or heart conditions.`
//   },
//   // Add more products as needed...
// ];
  
  // Add more products as needed...

function Home() {
  const [products, setProducts] = useState([])
   const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getFoodProducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProducts(data); // Update state with fetched data
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Load Data Called");
    loadData();
  }, []);
  const [filteredProduct, setFilteredProduct] = useState(null);
  const healthConditions = [
    'Acid Reflux (GERD)', 'Obesity or Overweight', 'Heart Disease', 'High Blood Pressure (Hypertension)',
    'Allergies or Sensitivities to MSG/Glutamates', 'Irritable Bowel Syndrome (IBS)', 'Heart Disease', 
    'High Blood Pressure (Hypertension)', 
    'Obesity or Overweight', 
    'Diabetes', 
    'Allergies or Sensitivities to MSG/Glutamates', 
    'Kidney Issues', 
    'Bone Health Issues', 
    'Irritable Bowel Syndrome (IBS)', 
    'Gastroesophageal Reflux Disease (GERD)', 
    'Metabolic Issues', 
    'Cancer Risks'
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
    <div className="home">
      {/* <Header/> */}
      <header className="header">
        <div className="cont ">
        <h1>Product Health Checker</h1>
        <p>Search for products and see if they are suitable based on your health conditions</p>
        </div>
      </header>
     
      <SearchBar 
        onSearch={handleSearch} 
        healthConditions={healthConditions} 
      />
      
      {filteredProduct && (
        <div className="product-details">
          <ProductInfoTable product={filteredProduct} />
          <p className="product-description">{filteredProduct.description}</p>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <div className="sticky-nav">
        <h3>Recommendations</h3>
        <p>Based on your search, consider checking ingredient labels carefully.</p>
      </div>
    </div>
  );
}

export default Home;
