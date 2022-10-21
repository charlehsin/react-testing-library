import React from 'react';
import { useAppContext } from './hooks';

function MessageBoard() {
  const { state: { messages } } = (useAppContext() as any);

  return (
    <div>
      {
        messages.map((messageItem: any) => {
          const { id, text, timestamp } = messageItem;

          return (
            <div key={id}>
              <h4>{new Date(timestamp).toLocaleString()}</h4>
              <p>{text}</p>
              <hr />
            </div>
          );
        })
      }
    </div>
  );
}

export default MessageBoard;