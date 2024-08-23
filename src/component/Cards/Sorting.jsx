// Home.js
import React, { useState } from 'react';
import Card from './Cards/Cards';
import arr from './meds.json'; // Ensure this path is correct
import './Sorting.css'

const Home = () => {
  // State to hold the selected disease and filtered medications
  const [selectedDisease, setSelectedDisease] = useState('');

  // Function to handle selection change
  const handleSelectChange = (event) => {
    const diseaseName = event.target.value;
    setSelectedDisease(diseaseName);
  };

  // Filter the medications based on the selected disease
  const filteredMedications = selectedDisease
    ? arr.find(item => item.disease === selectedDisease)?.medications || []
    : arr.flatMap(item => item.medications); // Show all medications when no disease is selected

  return (
    <div className="p-6">
      <div className="container abp mb-6 items-center">
        {/* Centering the label */}
        <label 
          htmlFor="disease" 
          className="block text-lg font-medium mb-2 text-center mx-auto" // Center text and margin auto
        >
          Select a Common Disease:
        </label>
        <select
          id="disease"
          value={selectedDisease}
          onChange={handleSelectChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">--Select--</option>
          {arr.map((item) => (
            <option key={item.disease} value={item.disease}>
              {item.disease}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
        {filteredMedications.map((medication, index) => (
          <Card
            key={index}
            frontContent={medication.name}
            backContent={medication.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
