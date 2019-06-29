import React from 'react';
import MediumArrow from "./lib/components/BranchArrows/MediumArrow/MediumArrow";

const arr = [true, true, false];

function App() {
  return (
    <div className="App">
        asjdfgkjasdgfjasgdfasgdfhj
        {
            arr.map(((value) => <MediumArrow direction={value} />))
        }
    </div>
  );
}

export default App;
