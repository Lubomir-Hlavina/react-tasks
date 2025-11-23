'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects4() {
  const [user, setUser] = useState({
    name: 'Kika',
    settings: {
      theme: 'dark',
      fontSize: 16,
    },
  });

  const increaseFontSize = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: {
        ...prevUser.settings,
        fontSize: prevUser.settings.fontSize + 1,
      },
    }));
  };

  return (
    <Container>
      <p>{user.settings.fontSize}</p>
      <Button onClick={increaseFontSize}>Increase font size</Button>
    </Container>
  );
}

export default Objects4;
