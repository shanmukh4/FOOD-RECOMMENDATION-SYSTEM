function HealthConditionsList({ conditions }) {
    return (
      <div className="health-conditions">
        <h3>Health Conditions to Avoid This Product:</h3>
        <ul>
          {conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HealthConditionsList;
  