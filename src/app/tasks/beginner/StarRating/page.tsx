'use client';

// Task:

// Create a `StarRating` component.

// Use `useState` to store the rating (`rating`, a number from 0 to 5).

// Display 5 buttons (or `<span>` elements) with stars (e.g., ★).

// When a star is clicked, set the rating to that value.

// Below the stars, display: **“Your rating: X / 5”**.

// 👉 **Bonus:**

// Make the stars change color depending on which ones are “active” (e.g., yellow for active, gray for inactive).

import Container from '@/components/ui/Container';
import React, { useState } from 'react';

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <Container>
      <div className="flex gap-2 cursor-pointer text-2xl">
        {['1', '2', '3', '4', '5'].map((_, index) => (
          <span
            key={index}
            className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
            onClick={() => setRating(index + 1)}
          >
            ★
          </span>
        ))}
      </div>
      <p>Your rating: {rating} / 5</p>
    </Container>
  );
};

export default StarRating;
