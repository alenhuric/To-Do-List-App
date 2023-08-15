import React, { useState, useEffect } from 'react';

function TestComponent() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Testing Backend Integration</h2>
      <p>Data from backend: {data}</p>
    </div>
  );
}

export default TestComponent;
