'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState, useEffect } from 'react';

// Create a component that:

// has a loading state (true/false)

// if loading === true, display the text: "Loading..."

// if loading === false, display the text: "Done!"

// Just a simple toggle after clicking the button:

// when you click the "Run" button, the loading starts on true

// after 2 seconds (setTimeout) set loading to false

const SetTimeout1 = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;

    const id = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(id);
  }, [loading]);

  function handleBtn() {
    setLoading(true);
  }

  return (
    <Container>
      <Button onClick={handleBtn}>Start loading</Button>
      <p>{loading ? 'Loading' : 'Done'}</p>
    </Container>
  );
};

export default SetTimeout1;
