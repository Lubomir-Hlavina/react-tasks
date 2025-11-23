'use client';

// TASK


// Create a **MiniPoll** component.

// * It should have two buttons: 👍 and 👎.
// * Clicking a button increases the corresponding vote count.
// * Display which option is currently winning.


import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function MiniPoll() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function winnerInfo() {
    if (likes > dislikes) {
      return 'Likes winning';
    } else if (likes < dislikes) {
      return 'Dislikes winning';
    } else {
      return 'It is a draw';
    }
  }

  function resetAll() {
    setLikes(0);
    setDislikes(0);
  }

  return (
    <Container>
      <p>{likes}</p>
      <Button onClick={() => setLikes((prevState) => prevState + 1)}>👍</Button>
      <p>{dislikes}</p>
      <Button onClick={() => setDislikes((prevState) => prevState + 1)}>
        👎
      </Button>
      <p>{winnerInfo()}</p>
      <Button onClick={resetAll}>Reset</Button>
    </Container>
  );
}

export default MiniPoll;
