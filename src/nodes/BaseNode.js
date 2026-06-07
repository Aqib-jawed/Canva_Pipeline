// BaseNode.js
// Part 1: Reusable node abstraction — all nodes are built on this

import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  inputs = [],       // [{ id, label, position }]
  outputs = [],      // [{ id, label, position }]
  fields = [],       // rendered form fields (JSX or null)
  minWidth = 220,
  minHeight = 90,
  width,
  height,
  accentColor = '#6366f1',
  icon = null,
  children = null,
}) => {
  const nodeWidth = width || minWidth;
  const nodeHeight = height || minHeight;

  return (
    <div
      style={{
        width: nodeWidth,
        minHeight: nodeHeight,
        background: 'linear-gradient(145deg, #1e1e2e, #2a2a3e)',
        border: `1.5px solid ${accentColor}55`,
        borderRadius: '12px',
        boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px ${accentColor}22, inset 0 1px 0 ${accentColor}33`,
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        overflow: 'visible',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(90deg, ${accentColor}33, ${accentColor}11)`,
          borderBottom: `1px solid ${accentColor}33`,
          borderRadius: '10px 10px 0 0',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {icon && (
          <span style={{ fontSize: '14px' }}>{icon}</span>
        )}
        <span
          style={{
            color: accentColor,
            fontWeight: '700',
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {fields}
        {children}
      </div>

      {/* Input Handles (Left side) */}
      {inputs.map((input, i) => (
        <div key={input.id}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${input.id}`}
            style={{
              background: accentColor,
              border: `2px solid #1e1e2e`,
              width: '10px',
              height: '10px',
              top: input.top || `${((i + 1) / (inputs.length + 1)) * 100}%`,
              left: '-5px',
            }}
          />
          {input.label && (
            <span
              style={{
                position: 'absolute',
                left: '10px',
                top: input.top || `${((i + 1) / (inputs.length + 1)) * 100}%`,
                transform: 'translateY(-50%)',
                fontSize: '9px',
                color: '#888',
                pointerEvents: 'none',
              }}
            >
              {input.label}
            </span>
          )}
        </div>
      ))}

      {/* Output Handles (Right side) */}
      {outputs.map((output, i) => (
        <div key={output.id}>
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${output.id}`}
            style={{
              background: accentColor,
              border: `2px solid #1e1e2e`,
              width: '10px',
              height: '10px',
              top: output.top || `${((i + 1) / (outputs.length + 1)) * 100}%`,
              right: '-5px',
            }}
          />
          {output.label && (
            <span
              style={{
                position: 'absolute',
                right: '10px',
                top: output.top || `${((i + 1) / (outputs.length + 1)) * 100}%`,
                transform: 'translateY(-50%)',
                fontSize: '9px',
                color: '#888',
                pointerEvents: 'none',
              }}
            >
              {output.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

// Reusable styled field components
export const NodeField = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
    {label && (
      <label style={{ fontSize: '10px', color: '#888', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </label>
    )}
    {children}
  </div>
);

export const nodeInputStyle = {
  background: '#12121e',
  border: '1px solid #333',
  borderRadius: '6px',
  color: '#e2e8f0',
  fontSize: '12px',
  padding: '5px 8px',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

export const nodeSelectStyle = {
  ...nodeInputStyle,
  cursor: 'pointer',
};
