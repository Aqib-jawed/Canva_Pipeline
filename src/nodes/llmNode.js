// llmNode.js — rebuilt using BaseNode abstraction

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon="🤖"
      accentColor="#a78bfa"
      minHeight={100}
      inputs={[
        { id: 'system', label: 'system', top: '33%' },
        { id: 'prompt', label: 'prompt', top: '66%' },
      ]}
      outputs={[{ id: 'response', label: 'response' }]}
      fields={[
        <p key="desc" style={{ fontSize: '11px', color: '#888', margin: 0 }}>
          Connects to a large language model. Accepts a system prompt and user prompt, returns a response.
        </p>
      ]}
    />
  );
};
