'use client';

// TASK

// Úloha – fetch jedného postu (id = 1)

// API:

// https://jsonplaceholder.typicode.com/posts/1


// Ulož a vypíš:

// title

import React, { useEffect, useState } from 'react';

function UseEffect2() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((resp) => {
        if (!resp.ok) throw new Error('Network error');
        return resp.json();
      })
      .then((fetchedData) => {
        console.log(fetchedData);
        setData(fetchedData);
      })
      .catch((err) => setError(err.message));
  }, []);

  return <div>{data.title}</div>;
}

export default UseEffect2;
