'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects7() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Peter', active: false },
    { id: 2, name: 'Jana', active: true },
    { id: 3, name: 'Lukas', active: false },
  ]);

  function changeStatus(id: number) {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }

  return (
    <Container>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-3">
            <span className={`text-${user.active ? 'blue' : 'red'}-500`}>
              {user.name}
            </span>

            <Button onClick={() => changeStatus(user.id)} className="ml-3">
              Change state
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Objects7;
