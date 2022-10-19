import React, { useState } from 'react';
import { useDynamicTransition } from './hook';

const LABELS: string[] = ['label 1', 'label 2', 'label 3'];
const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;

function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS);

  const index = useDynamicTransition(delay, LABELS.length);

  const updateDelay = (event: any) => {
    const delay = Number(event.target.value) * SECONDS;
    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  return (
    <div className='Gallery'>
      <label>{LABELS[index]}</label>
      <div className='multiform'>
        <div>
          Gallery transition delay (seconds):
          <input type='number' onChange={updateDelay} value={delay / SECONDS} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;