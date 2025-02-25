// App.jsx
import React, { useState } from 'react';
import CoreSection from './components/CoreSection/CoreSection';
import Header from './components/Header/Header';
import Background from './components/Background/Background';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Background loading={loading} />
      <Header />
      <CoreSection loading={loading} setLoading={setLoading} />
    </>
  );
}

export default App;
