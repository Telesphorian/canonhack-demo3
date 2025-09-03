import React, { useState } from 'react';
import baseText from './baseText';

function applyFilter(text, filter) {
  return text.split('\n').filter(filter).join('\n');
}

function App() {
  const [output, setOutput] = useState('');

  const filters = {
    skipShort: line => line.length > 40,
    noChapterTitles: line => !line.startsWith('CHAPTER')
  };

  const runFilters = () => {
    const filtered = applyFilter(baseText, line =>
      filters.skipShort(line) && filters.noChapterTitles(line)
    );
    setOutput(filtered);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>CanonHack Filter Demo</h1>
      <button onClick={runFilters}>Run Filters</button>
      <pre style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>{output}</pre>
    </div>
  );
}

export default App;