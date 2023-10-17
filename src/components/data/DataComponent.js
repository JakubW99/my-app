import React, { useState, useEffect } from 'react';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>Title:</strong> {item.title}<br />
            <strong>Body:</strong> {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
