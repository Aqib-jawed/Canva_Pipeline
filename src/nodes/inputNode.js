// inputNode.js — rebuilt using BaseNode abstraction

import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle, nodeSelectStyle } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      icon="📥"
      accentColor="#22d3ee"
      outputs={[{ id: 'value', label: 'value' }]}
      fields={[
        <NodeField label="Name" key="name">
          <input style={nodeInputStyle} type="text" value={currName} onChange={e => setCurrName(e.target.value)} />
        </NodeField>,
        <NodeField label="Type" key="type">
          <select style={nodeSelectStyle} value={inputType} onChange={e => setInputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </NodeField>,
      ]}
    />
  );
};
