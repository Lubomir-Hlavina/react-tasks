'use client';

// TASK

// vytvor tlačidlo Reset, ktoré resetne objekt

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects3() {
  const [player, setPlayer] = useState({
    score: 5,
    level: 2,
  });

  return (
    <Container>
      <Button onClick={() => setPlayer({ score: 0, level: 0 })}>Reset</Button>
      <p>
        Score:{player.score}
        <br />
        Level:{player.level}
      </p>
    </Container>
  );
}

export default Objects3;
