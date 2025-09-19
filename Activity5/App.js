// App.js
import React from 'react';
// Uncomment one of the following lines to test each app
import CounterApp from './Activity5/CounterApp';
import ColorChangerApp from './Activity5/ColorChangerApp';

const App = () => {
  return (
    <>
      <CounterApp />
      { <ColorChangerApp /> }
    </>
  );
};

export default App;