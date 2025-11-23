'use client';

// TASK
// Máš objekt:

// const [user, setUser] = useState({
//   name: "Marek",
//   active: false
// });


// Úloha:

// tlačidlo, ktoré prepne active na opačnú hodnotu
// (true → false, false → true)

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects2() {
  const [user, setUser] = useState({
    name: 'Marek',
    active: false,
  });

  return (
    <Container>
      {user.active && <p>{user.name}</p>}
      <Button
        onClick={() =>
          setUser((prevUser) => ({ ...prevUser, active: !prevUser.active }))
        }
      >
        Change value
      </Button>
    </Container>
  );
}

export default Objects2;
