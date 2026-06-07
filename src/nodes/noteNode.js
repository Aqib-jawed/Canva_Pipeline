import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || 'Add a note...');
  return (
    <BaseNode id={id} title="Note" icon="🗒️" accentColor="#facc15" fields={[
      <NodeField key="note" label="Comment">
        <textarea style={{ ...nodeInputStyle, resize: 'none', minHeight: '60px' }}
          value={note} onChange={e => setNote(e.target.value)} />
      </NodeField>
    ]} />
  );
};
