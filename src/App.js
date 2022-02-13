import './App.css';

import Select from 'react-select'

function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="App">
      <h3>Super cool apps with React, Cloudflare</h3>
      <div className='dropdown'>
        <Select options={options} />
      </div>
    </div>
  );
}

export default App;
