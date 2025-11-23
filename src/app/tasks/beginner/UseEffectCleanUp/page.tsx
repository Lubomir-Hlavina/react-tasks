'use client';


// Task – useEffect that sets the text “Done” after 3 seconds

// Used by:

// setTimeout

// cleaning

import React, { useEffect } from 'react';

function UseEffectCleanUp() {
  useEffect(() => {
    const id = setTimeout(() => {
      console.log('Done');
    }, 3000);

    return () => clearTimeout(id);
  }, []);

  return <div></div>;
}

export default UseEffectCleanUp;
