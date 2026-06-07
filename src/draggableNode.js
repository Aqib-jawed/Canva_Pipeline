// draggableNode.js — styled draggable node button

export const DraggableNode = ({ type, label, color = '#6366f1', icon = '◆' }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={e => onDragStart(e, type)}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '6px 12px',
        background: `${color}15`,
        border: `1px solid ${color}44`,
        borderRadius: '8px',
        color: color,
        fontSize: '11px',
        fontWeight: '600',
        cursor: 'grab',
        userSelect: 'none',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        transition: 'all 0.15s ease',
        letterSpacing: '0.03em',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}28`;
        e.currentTarget.style.borderColor = `${color}88`;
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${color}15`;
        e.currentTarget.style.borderColor = `${color}44`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <span style={{ fontSize: '12px' }}>{icon}</span>
      {label}
    </div>
  );
};
