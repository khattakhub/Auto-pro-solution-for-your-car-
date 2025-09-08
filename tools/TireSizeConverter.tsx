import React, { useState, useMemo } from 'react';
import Input from '../components/Input';

const ExclamationTriangleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);


interface TireSize {
  width: string;
  aspectRatio: string;
  rim: string;
}

const TireSizeConverter: React.FC = () => {
  const [originalTire, setOriginalTire] = useState<TireSize>({ width: '225', aspectRatio: '45', rim: '17' });
  const [newTire, setNewTire] = useState<TireSize>({ width: '245', aspectRatio: '40', rim: '18' });
  const [showResult, setShowResult] = useState(false);

  const handleOriginalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalTire({ ...originalTire, [e.target.name]: e.target.value });
    setShowResult(false);
  };
  
  const handleNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTire({ ...newTire, [e.target.name]: e.target.value });
    setShowResult(false);
  };

  const calculateTireData = (tire: TireSize) => {
    const width = parseFloat(tire.width);
    const aspectRatio = parseFloat(tire.aspectRatio);
    const rim = parseFloat(tire.rim);

    if (width > 0 && aspectRatio > 0 && rim > 0) {
      const sidewall = (width * aspectRatio) / 100; // in mm
      const diameter = sidewall * 2 + rim * 25.4; // in mm
      return {
        sidewallIn: (sidewall / 25.4).toFixed(2),
        diameterIn: (diameter / 25.4).toFixed(2),
        circumferenceIn: ((diameter * Math.PI) / 25.4).toFixed(2),
        diameterMM: diameter,
      };
    }
    return { sidewallIn: '0', diameterIn: '0', circumferenceIn: '0', diameterMM: 0 };
  };

  const originalData = useMemo(() => calculateTireData(originalTire), [originalTire]);
  const newData = useMemo(() => calculateTireData(newTire), [newTire]);

  const diameterDiff = useMemo(() => {
    if (originalData.diameterMM > 0 && newData.diameterMM > 0) {
      return ((newData.diameterMM - originalData.diameterMM) / originalData.diameterMM) * 100;
    }
    return 0;
  }, [originalData, newData]);

  const handleCompare = () => setShowResult(true);
  const handleReset = () => {
    setOriginalTire({ width: '225', aspectRatio: '45', rim: '17' });
    setNewTire({ width: '245', aspectRatio: '40', rim: '18' });
    setShowResult(false);
  }

  const TireVisualizer: React.FC<{ originalDiameter: number; newDiameter: number }> = ({ originalDiameter, newDiameter }) => {
    const maxDiameter = Math.max(originalDiameter, newDiameter, 1);
    const originalRatio = (originalDiameter / maxDiameter) * 100;
    const newRatio = (newDiameter / maxDiameter) * 100;

    return (
      <div className="flex justify-center items-end gap-8 my-8 h-48">
        <div className="text-center">
          <div className="relative mx-auto bg-gray-300 rounded-full" style={{ width: `${originalRatio}%`, height: `${originalRatio}%` }}>
             <div className="absolute inset-0.5 bg-gray-200 rounded-full"></div>
          </div>
          <p className="mt-2 font-semibold">Original</p>
        </div>
        <div className="text-center">
          <div className="relative mx-auto bg-gray-700 rounded-full" style={{ width: `${newRatio}%`, height: `${newRatio}%` }}>
            <div className="absolute inset-0.5 bg-gray-600 rounded-full"></div>
          </div>
          <p className="mt-2 font-semibold">New</p>
        </div>
      </div>
    );
  };

  const TireInfoTable: React.FC = () => (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="bg-light p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">Original Tire Specs</h4>
            <p>Diameter: {originalData.diameterIn}"</p>
            <p>Sidewall: {originalData.sidewallIn}"</p>
            <p>Circumference: {originalData.circumferenceIn}"</p>
        </div>
        <div className="bg-light p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">New Tire Specs</h4>
            <p>Diameter: {newData.diameterIn}"</p>
            <p>Sidewall: {newData.sidewallIn}"</p>
            <p>Circumference: {newData.circumferenceIn}"</p>
        </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Tire Size Converter</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Original Tire</h3>
          <div className="space-y-3">
            <Input id="originalWidth" name="width" label="Width (mm)" type="number" value={originalTire.width} onChange={handleOriginalChange} />
            <Input id="originalAspectRatio" name="aspectRatio" label="Aspect Ratio (%)" type="number" value={originalTire.aspectRatio} onChange={handleOriginalChange} />
            <Input id="originalRim" name="rim" label="Rim (in)" type="number" value={originalTire.rim} onChange={handleOriginalChange} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">New Tire</h3>
          <div className="space-y-3">
            <Input id="newWidth" name="width" label="Width (mm)" type="number" value={newTire.width} onChange={handleNewChange} />
            <Input id="newAspectRatio" name="aspectRatio" label="Aspect Ratio (%)" type="number" value={newTire.aspectRatio} onChange={handleNewChange} />
            <Input id="newRim" name="rim" label="Rim (in)" type="number" value={newTire.rim} onChange={handleNewChange} />
          </div>
        </div>
      </div>

       <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button onClick={handleCompare} className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors">
          Compare
        </button>
        <button onClick={handleReset} className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
          Reset
        </button>
      </div>

      {showResult && (
        <div className="mt-8 fadeIn">
            <TireVisualizer originalDiameter={originalData.diameterMM} newDiameter={newData.diameterMM} />
            <div className={`mt-6 p-6 rounded-lg text-center ${Math.abs(diameterDiff) > 3 ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                <p className="text-lg text-gray-600">Diameter Difference</p>
                <p className={`text-4xl font-bold mt-1 ${Math.abs(diameterDiff) > 3 ? 'text-red-600' : 'text-green-700'}`}>
                    {diameterDiff.toFixed(2)}%
                </p>
                {Math.abs(diameterDiff) > 3 && (
                    <p className="text-sm text-red-700 mt-2 flex items-center justify-center gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        Warning: A difference over 3% may affect your speedometer and ABS.
                    </p>
                )}
             </div>
            <TireInfoTable />
        </div>
      )}
    </div>
  );
};

export default TireSizeConverter;