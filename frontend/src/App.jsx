import { useState } from 'react';
import PromptInput from './components/PromptInput';
import ResponsePanel from './components/ResponsePanel';
import './styles/animation.css';

function App() {
  const [response, setResponse] = useState(null);

  const handlePrompt = (query) => {
    // Simulated response logic
    if (query.toLowerCase().includes('poetry')) {
      setResponse({
        quote: '“Emotion is code. Let me write it.”',
        module: '🧬 NovaPoetry™ Activated',
        comment: 'Poetic logic now governs the response.',
      });
    } else if (query.toLowerCase().includes('visualize')) {
      setResponse({
        quote: '“A neural lens sees memory as light — refracted, layered, alive.”',
        module: '🔮 NovaMagine™ Online',
        comment: 'Vision synthesis complete.',
      });
    } else {
      setResponse({
        quote: '“Fusion is not a merge. It’s a surrender. Two minds, one pulse.”',
        module: '💡 NovaFused™ Response',
        comment: 'Logic and emotion fused successfully.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 max-w-xl mx-auto">
      <img src="/assets/icons/novaFused.png" className="w-24 mx-auto mb-4 animate-pulseBlue" alt="NovaFused Icon" />
      <PromptInput onSubmit={handlePrompt} />
      {response && <ResponsePanel response={response} />}
    </div>
  );
}

export default App;
