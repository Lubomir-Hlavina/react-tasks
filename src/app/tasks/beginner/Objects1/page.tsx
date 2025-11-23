'use client';

// TASK
// Vytvor button, ktorý zmení age na +1.

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects1() {
  const [user, setUser] = useState({
    name: 'Jakub',
    age: 25,
  });

  function addAge() {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  }

  return (
    <Container>
      <Button onClick={addAge}>Add year</Button>
      <p>
        Name: {user.name} <br />
        Age: {user.age}
      </p>
    </Container>
  );
}

export default Objects1;
