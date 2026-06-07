import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'value > 0');
  return (
    <BaseNode id={id} title="Filter" icon="🔍" accentColor="#e879f9"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[{ id: 'true', label: 'true' }, { id: 'false', label: 'false' }]}
      fields={[
        <NodeField key="cond" label="Condition">
          <input style={nodeInputStyle} type="text" value={condition} onChange={e => setCondition(e.target.value)} />
        </NodeField>
      ]}
    />
  );
};
