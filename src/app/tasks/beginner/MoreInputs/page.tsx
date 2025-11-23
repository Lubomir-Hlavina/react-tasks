'use client';

import Container from '@/components/ui/Container';
import { InputGroup, InputGroupInput } from '@/components/ui/input-group';
import React, { useState } from 'react';

function MoreInputs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <InputGroup>
        <InputGroupInput
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />

        <InputGroupInput
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
      </InputGroup>

      <p>Meno: {form.name || 'Unknown'}</p>
      <p>Email: {form.email || 'Unknown'}</p>
    </Container>
  );
}

export default MoreInputs;
