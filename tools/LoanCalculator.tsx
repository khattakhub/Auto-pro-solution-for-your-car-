import React, { useState } from 'react';
import Input from '../components/Input';

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const handleCalculate = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const years = parseFloat(term);

    if (principal > 0 && annualRate > 0 && years > 0) {
      const monthlyRate = annualRate / 100 / 12;
      const numberOfPayments = years * 12;
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(emi);
    } else {
      setMonthlyPayment(null);
    }
  };

  const handleReset = () => {
    setAmount('');
    setRate('');
    setTerm('');
    setMonthlyPayment(null);
  };


  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Loan / EMI Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          id="amount"
          label="Loan Amount ($)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 25000"
        />
        <Input
          id="rate"
          label="Annual Interest Rate (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="e.g., 5.5"
        />
        <Input
          id="term"
          label="Loan Term (years)"
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="e.g., 5"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={handleCalculate} className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors">
          Calculate Payment
        </button>
        <button onClick={handleReset} className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
          Reset
        </button>
      </div>
      {monthlyPayment !== null && (
        <div className="mt-6 p-6 bg-light border border-gray-200 rounded-lg text-center">
          <p className="text-lg text-gray-600">Estimated Monthly Payment</p>
          <p className="text-4xl font-bold text-primary mt-1">
            ${monthlyPayment.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;