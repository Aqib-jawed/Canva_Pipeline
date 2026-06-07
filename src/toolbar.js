// toolbar.js — Part 2: Styled toolbar with all 9 node types

import { DraggableNode } from './draggableNode';

const nodes = [
  { type: 'customInput',  label: 'Input',     color: '#22d3ee', icon: '📥' },
  { type: 'customOutput', label: 'Output',    color: '#f472b6', icon: '📤' },
  { type: 'llm',          label: 'LLM',       color: '#a78bfa', icon: '🤖' },
  { type: 'text',         label: 'Text',      color: '#f59e0b', icon: '📝' },
  { type: 'note',         label: 'Note',      color: '#facc15', icon: '🗒️' },
  { type: 'api',          label: 'API Call',  color: '#34d399', icon: '🌐' },
  { type: 'transform',    label: 'Transform', color: '#fb923c', icon: '⚙️' },
  { type: 'filter',       label: 'Filter',    color: '#e879f9', icon: '🔍' },
  { type: 'merge',        label: 'Merge',     color: '#38bdf8', icon: '🔀' },
];

export const PipelineToolbar = () => (
  <div style={{
    background: 'linear-gradient(90deg, #0f0f1a, #1a1a2e)',
    borderBottom: '1px solid #2a2a3e',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  }}>
    {/* Logo */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '16px', borderRight: '1px solid #2a2a3e', paddingRight: '16px' }}>
      <div style={{
        width: '28px', height: '28px', borderRadius: '7px',
        background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '14px', boxShadow: '0 0 12px #6366f155',
      }}>⚡</div>
      <span style={{ color: '#e2e8f0', fontWeight: '700', fontSize: '14px', letterSpacing: '-0.02em' }}>
        VectorShift
      </span>
    </div>

    {/* Node buttons */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {nodes.map(n => (
        <DraggableNode key={n.type} type={n.type} label={n.label} color={n.color} icon={n.icon} />
      ))}
    </div>
  </div>
);
