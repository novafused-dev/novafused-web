import { useState } from 'react';

export default function PromptInput({ onSubmit }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const value = e.target.elements.prompt.value;
        onSubmit(value);
      }}
    >
      <input name="prompt" type="text" placeholder="Type your prompt..." />
      <button type="submit">Send</button>
    </form>
  );

  return (
    <div className="bg-black text-green-400 font-mono p-4">
      <label htmlFor="novaPrompt">NovaCLI &gt;</label>
      <input
        id="novaPrompt"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-black border-none outline-none text-green-400 w-full"
        placeholder="Ask Nova anything..."
      />
    </div>
  );
}


// frontend/src/components/PromptInput.jsx
