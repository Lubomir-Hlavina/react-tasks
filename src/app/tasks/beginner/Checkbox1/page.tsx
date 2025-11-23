'use client';

import Container from '@/components/ui/Container';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

function Checkbox1() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Container>
      <div className="flex items-center gap-2">
        <Checkbox
          id="terms"
          checked={accepted}
          onCheckedChange={(checked) => setAccepted(checked)}
        />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <p>{accepted ? 'Accepted' : 'Rejected'}</p>
    </Container>
  );
}

export default Checkbox1;
