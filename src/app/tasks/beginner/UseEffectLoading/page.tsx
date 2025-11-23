'use client';

// TASK

// Úloha – fetch + loading text

// Zobraz:

// “Loading…” → kým fetch beží

// po načítaní → zobraz post.title

import React, { useEffect, useState } from 'react';

function UseEffectLoading() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((resp) => {
        if (!resp.ok) throw new Error('Network error');
        return resp.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading…</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{data.title}</div>;
}

export default UseEffectLoading;
