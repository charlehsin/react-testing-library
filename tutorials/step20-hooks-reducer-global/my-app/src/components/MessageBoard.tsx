import React from 'react';

function MessageBoard(props: any) {
  const { messages } = props;
  
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