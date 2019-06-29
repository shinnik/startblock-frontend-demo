import React from 'react';
import MediumArrow from "./lib/components/BranchArrows/MediumArrow/MediumArrow";

const arr = [true, true, false];

function App() {
  return (
    <div className="App">
        asjdfgkjasdgfjasgdfasgdfhj
        {
            arr.map(((value, index, array) => <MediumArrow direction={value} last={index === array.length-1} /> ))
        }
    </div>
  );
}

export default App;
