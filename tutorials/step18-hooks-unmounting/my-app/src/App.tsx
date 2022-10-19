import React, { useState } from 'react';
import Joke from './Joke';
import Tasks from './Tasks';
import Gallery from './Gallery';

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = (event: any) => {
    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="App">
      <h1>Hello everyone</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} aria-label='userQueryText' />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery && <Gallery />
        }
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
    </div>
  );
}

export default App;
