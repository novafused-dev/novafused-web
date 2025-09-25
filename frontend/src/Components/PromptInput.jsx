import { useState } from 'react';

export default function PromptInput({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      onSubmit(query);
      setQuery('');
    }
  };

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
