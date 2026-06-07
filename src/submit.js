// submit.js — Part 4: Send nodes/edges to backend, show alert

import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await response.json();
      alert(
        `✅ Pipeline Analysis\n\n` +
        `📦 Nodes: ${data.num_nodes}\n` +
        `🔗 Edges: ${data.num_edges}\n` +
        `🔄 Is DAG (no cycles): ${data.is_dag ? 'Yes ✓' : 'No ✗'}`
      );
    } catch (err) {
      alert('❌ Error connecting to backend. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
      background: '#0f0f1a',
      borderTop: '1px solid #2a2a3e',
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    }}>
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          background: loading
            ? '#333'
            : 'linear-gradient(135deg, #6366f1, #a78bfa)',
          border: 'none',
          borderRadius: '10px',
          color: '#fff',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '13px',
          fontWeight: '700',
          letterSpacing: '0.05em',
          padding: '12px 36px',
          boxShadow: loading ? 'none' : '0 0 20px #6366f155',
          transition: 'all 0.2s ease',
          textTransform: 'uppercase',
        }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = 'scale(1.03)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {loading ? '⏳ Analysing...' : '⚡ Submit Pipeline'}
      </button>
    </div>
  );
};
