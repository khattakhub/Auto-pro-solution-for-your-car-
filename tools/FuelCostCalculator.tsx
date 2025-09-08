import React, { useState } from 'react';
import Input from '../components/Input';

const FuelCostCalculator: React.FC = () => {
  const [distance, setDistance] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [price, setPrice] = useState('');
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const handleCalculate = () => {
    const numDistance = parseFloat(distance);
    const numEfficiency = parseFloat(efficiency);
    const numPrice = parseFloat(price);

    if (numDistance > 0 && numEfficiency > 0 && numPrice > 0) {
      setTotalCost((numDistance / numEfficiency) * numPrice);
    } else {
      setTotalCost(null);
    }
  };

  const handleReset = () => {
    setDistance('');
    setEfficiency('');
    setPrice('');
    setTotalCost(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Fuel Cost Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          id="distance"
          label="Trip Distance (miles)"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="e.g., 300"
        />
        <Input
          id="efficiency"
          label="Fuel Efficiency (MPG)"
          type="number"
          value={efficiency}
          onChange={(e) => setEfficiency(e.target.value)}
          placeholder="e.g., 25"
        />
        <Input
          id="price"
          label="Gas Price ($ / gallon)"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="e.g., 3.50"
        />
      </div>
       <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={handleCalculate} className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors">
          Calculate Cost
        </button>
        <button onClick={handleReset} className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
          Reset
        </button>
      </div>
      {totalCost !== null && (
        <div className="mt-6 p-6 bg-light border border-gray-200 rounded-lg text-center">
          <p className="text-lg text-gray-600">Estimated Fuel Cost</p>
          <p className="text-4xl font-bold text-primary mt-1">
            ${totalCost.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default FuelCostCalculator;