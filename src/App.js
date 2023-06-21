import React from 'react';
import ColorPicker from './colorPicker';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
