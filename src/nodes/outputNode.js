// outputNode.js — rebuilt using BaseNode abstraction

import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle, nodeSelectStyle } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      icon="📤"
      accentColor="#f472b6"
      inputs={[{ id: 'value', label: 'value' }]}
      fields={[
        <NodeField label="Name" key="name">
          <input style={nodeInputStyle} type="text" value={currName} onChange={e => setCurrName(e.target.value)} />
        </NodeField>,
        <NodeField label="Type" key="type">
          <select style={nodeSelectStyle} value={outputType} onChange={e => setOutputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </NodeField>,
      ]}
    />
  );
};
