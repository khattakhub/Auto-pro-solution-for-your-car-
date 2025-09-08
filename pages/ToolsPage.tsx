import React, { useState } from 'react';
import FuelCostCalculator from '../tools/FuelCostCalculator';
import LoanCalculator from '../tools/LoanCalculator';
import TireSizeConverter from '../tools/TireSizeConverter';
import Card from '../components/Card';

const FuelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
  </svg>
);
const BanknotesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
  </svg>
);
const AdjustmentsHorizontalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);


type Tool = 'fuel' | 'loan' | 'tire';

const tools = {
  fuel: { name: 'Fuel Cost Calculator', component: FuelCostCalculator, icon: FuelIcon, description: "Estimate the fuel cost for your next road trip." },
  loan: { name: 'Loan Calculator', component: LoanCalculator, icon: BanknotesIcon, description: "Calculate monthly payments for your car loan." },
  tire: { name: 'Tire Size Converter', component: TireSizeConverter, icon: AdjustmentsHorizontalIcon, description: "Compare tire sizes and see the difference." },
};

const ToolsPage: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool>('fuel');

  const ActiveToolComponent = tools[activeTool].component;

  return (
    <div className="py-16 sm:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">Automotive Tools</h1>
          <p className="mt-4 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Use our free, simple tools to make informed decisions about your vehicle.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {(Object.keys(tools) as Tool[]).map(toolKey => {
              const tool = tools[toolKey];
              return (
                <button key={toolKey} onClick={() => setActiveTool(toolKey)} className="text-left">
                  <Card className={`p-6 h-full ${activeTool === toolKey ? 'ring-2 ring-primary' : ''}`}>
                    <div className="flex items-center gap-4">
                       <div className="bg-primary/10 p-3 rounded-full">
                        <tool.icon className="w-8 h-8 text-primary" />
                       </div>
                       <div>
                        <h3 className="text-lg font-bold text-dark">{tool.name}</h3>
                        <p className="text-sm text-gray-600">{tool.description}</p>
                       </div>
                    </div>
                  </Card>
                </button>
              );
            })}
          </div>
          
          <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg fadeIn">
            <ActiveToolComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;