'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects9() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Matej',
      settings: { theme: 'dark', fontSize: 14 },
    },
    {
      id: 2,
      name: 'Andrea',
      settings: { theme: 'light', fontSize: 18 },
    },
  ]);

  function increaseFontSize(id: number) {
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === id
          ? {
              ...profile,
              settings: {
                ...profile.settings,
                fontSize: profile.settings.fontSize + 1,
              },
            }
          : profile
      )
    );
  }

  return (
    <Container>
      <ul>
        {profiles.map((profile) => (
          <li
            key={profile.id}
            style={{ fontSize: `${profile.settings.fontSize}px` }}
          >
            {profile.name} {profile.settings.fontSize}
            <Button onClick={() => increaseFontSize(profile.id)}>
              Increase font size
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Objects9;
