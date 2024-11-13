import { useState } from 'react';

const SelectWithButtons = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setResult(null);
    setError(null);
  };

  const handleButtonOne = async () => {
    // Only proceed if us-east-1 is selected
    if (selectedOption === 'option1') {
      setLoading(true);
      setResult(null);
      setError(null);
      
      try {
        const response = await fetch('http://ec2-54-198-221-235.compute-1.amazonaws.com:3000?read');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleButtonTwo = async () => {
    // Only proceed if us-east-1 is selected
    if (selectedOption === 'option1') {
      setLoading(true);
      setResult(null);
      setError(null);
      
      try {
        const response = await fetch('http://ec2-54-198-221-235.compute-1.amazonaws.com:3000?read');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-4 space-y-4">
      <select 
        value={selectedOption}
        onChange={handleSelectChange}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select an option</option>
        <option value="option1">us-east-1</option>
        <option value="option2">us-west-1</option>
      </select>
      
      <div className="flex gap-4">
        <button
          onClick={handleButtonOne}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={loading}
        >
          Write Operation
        </button>
        
        <button
          onClick={handleButtonTwo}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Read Operation'}
        </button>
      </div>

      {/* Display results or error */}
      {error && (
        <div className="p-4 text-red-500 bg-red-50 rounded-lg">
          Error: {error}
        </div>
      )}
      {result && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SelectWithButtons;