// frontend/src/components/PromptInput.jsx
import React, { useState } from 'react';

export default function PromptInput({ onSubmit }) {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
      }}
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type your prompt..."
        className="w-full p-2 rounded text-black"
      />
    </form>
  );
}
