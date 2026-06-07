import { useState } from 'react';
import { BaseNode, NodeField, nodeInputStyle, nodeSelectStyle } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com/endpoint');
  const [method, setMethod] = useState(data?.method || 'GET');
  return (
    <BaseNode id={id} title="API Call" icon="🌐" accentColor="#34d399"
      inputs={[{ id: 'body', label: 'body' }]}
      outputs={[{ id: 'response', label: 'response' }, { id: 'error', label: 'error' }]}
      fields={[
        <NodeField key="method" label="Method">
          <select style={nodeSelectStyle} value={method} onChange={e => setMethod(e.target.value)}>
            <option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option>
          </select>
        </NodeField>,
        <NodeField key="url" label="URL">
          <input style={nodeInputStyle} type="text" value={url} onChange={e => setUrl(e.target.value)} />
        </NodeField>,
      ]}
    />
  );
};
