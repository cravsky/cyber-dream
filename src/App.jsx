// App.jsx
import React, { useState } from 'react';
import CoreSection from './components/CoreSection/CoreSection';
import Header from './components/Header/Header';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="app-background">
        <Header />
        <CoreSection loading={loading} setLoading={setLoading} />
      </div>
    </>
  );
}

export default App;
