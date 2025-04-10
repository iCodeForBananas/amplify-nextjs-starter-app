'use client';

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import './../app/app.css';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import ButtonListPoc from '@/src/ui-components/ButtonListPoc';

// Amplify.configure(outputs);

// const client = generateClient<Schema>();

export default function App() {
  const items = [
    { id: '1', label: 'Button 1' },
    { id: '2', label: 'Button 2' },
    { id: '3', label: 'Button 3' },
  ];

  return (
    <main>
      <h1>My todos</h1>
      buttons
      <ButtonListPoc items={items} />
      after
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
