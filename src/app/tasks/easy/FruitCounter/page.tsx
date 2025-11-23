'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function FruitCounter() {
  const [fruits, setFruits] = useState([
    { name: 'Apple', count: 0 },
    { name: 'Orange', count: 0 },
    { name: 'Banana', count: 0 },
  ]);

  const increment = (name: string) => {
    setFruits((prevFruits) =>
      prevFruits.map((fruit) =>
        fruit.name === name ? { ...fruit, count: fruit.count + 1 } : fruit
      )
    );
  };

  return (
    <Container>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name} className="flex items-center justify-between">
            <span>{fruit.name}</span>
            <span>{fruit.count}</span>
            <Button onClick={() => increment(fruit.name)}>+</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default FruitCounter;
