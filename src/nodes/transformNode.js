import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle, nodeSelectStyle } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Uppercase');
  return (
    <BaseNode id={id} title="Transform" icon="⚙️" accentColor="#fb923c"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[{ id: 'output', label: 'output' }]}
      fields={[
        <NodeField key="op" label="Operation">
          <select style={nodeSelectStyle} value={operation} onChange={e => setOperation(e.target.value)}>
            <option>Uppercase</option><option>Lowercase</option>
            <option>Trim</option><option>Reverse</option><option>JSON Parse</option>
          </select>
        </NodeField>
      ]}
    />
  );
};
