import { useCallback, useState } from 'react';

import Autocomplete from './Autocomplete';
import './App.css';

function App() {
  const [address, setAddress] = useState<string>('');

  const handleChange = useCallback((selectedAddress) => {
    setAddress(selectedAddress);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps Autocomplete</h1>
        <h5>{address}</h5>
        <Autocomplete onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
