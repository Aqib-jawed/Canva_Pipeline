// textNode.js — Part 3: Dynamic resize + variable handle detection

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { nodeInputStyle } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Part 3: Extract {{variable}} names from text
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const found = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!found.includes(match[1])) found.push(match[1]);
    }
    setVariables(found);
  }, [currText]);

  // Part 3: Auto-resize the textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Dynamic node width: grow with text length
  const nodeWidth = Math.max(220, Math.min(450, 220 + Math.floor(currText.length / 10) * 10));

  return (
    <div
      style={{
        width: nodeWidth,
        minHeight: 90,
        background: 'linear-gradient(145deg, #1e1e2e, #2a2a3e)',
        border: '1.5px solid #f59e0b55',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 #f59e0b33',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg, #f59e0b33, #f59e0b11)',
        borderBottom: '1px solid #f59e0b33',
        borderRadius: '10px 10px 0 0',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span>📝</span>
        <span style={{ color: '#f59e0b', fontWeight: '700', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Text
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '10px', color: '#888', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Content
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          style={{
            ...nodeInputStyle,
            resize: 'none',
            minHeight: '50px',
            lineHeight: '1.5',
            overflow: 'hidden',
          }}
          rows={1}
        />
        {variables.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '2px' }}>
            {variables.map(v => (
              <span key={v} style={{
                background: '#f59e0b22',
                border: '1px solid #f59e0b55',
                borderRadius: '4px',
                color: '#f59e0b',
                fontSize: '9px',
                padding: '1px 5px',
              }}>
                {`{{${v}}}`}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic variable handles on left */}
      {variables.map((varName, i) => (
        <div key={varName}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${varName}`}
            style={{
              background: '#f59e0b',
              border: '2px solid #1e1e2e',
              width: '10px',
              height: '10px',
              top: `${((i + 1) / (variables.length + 1)) * 100}%`,
              left: '-5px',
            }}
          />
          <span style={{
            position: 'absolute',
            left: '10px',
            top: `${((i + 1) / (variables.length + 1)) * 100}%`,
            transform: 'translateY(-50%)',
            fontSize: '9px',
            color: '#f59e0b99',
            pointerEvents: 'none',
          }}>
            {varName}
          </span>
        </div>
      ))}

      {/* Output handle on right */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: '#f59e0b',
          border: '2px solid #1e1e2e',
          width: '10px',
          height: '10px',
        }}
      />
    </div>
  );
};
