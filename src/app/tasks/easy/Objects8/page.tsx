'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects8() {
  const [products, setProducts] = useState([
    { id: 1, name: 'iPhone', price: 500 },
    { id: 2, name: 'Keyboard', price: 50 },
  ]);

  function increasePrice(id: number) {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, price: product.price + 1 } : product
      )
    );
  }

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price}
            <Button onClick={() => increasePrice(product.id)} className="ml-3">
              Increase price
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Objects8;
