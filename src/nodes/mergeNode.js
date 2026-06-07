import { useState } from 'react';
import { BaseNode, NodeField, nodeSelectStyle } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [strategy, setStrategy] = useState(data?.strategy || 'Concat');
  return (
    <BaseNode id={id} title="Merge" icon="🔀" accentColor="#38bdf8"
      inputs={[{ id: 'a', label: 'input A', top: '35%' }, { id: 'b', label: 'input B', top: '65%' }]}
      outputs={[{ id: 'merged', label: 'merged' }]}
      fields={[
        <NodeField key="strat" label="Strategy">
          <select style={nodeSelectStyle} value={strategy} onChange={e => setStrategy(e.target.value)}>
            <option>Concat</option><option>Zip</option><option>Override</option>
          </select>
        </NodeField>
      ]}
    />
  );
};
