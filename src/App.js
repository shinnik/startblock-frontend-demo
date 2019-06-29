import React from 'react';
import MediumArrow from "./lib/components/BranchArrows/MediumArrow/MediumArrow";
import FlexHorizontal from "./lib/wrappers/flex-horizontal/Flex-Horizontal";
import CellInfo from "./lib/containers/CellInfo/CellInfo";
import MultiArrow from "./lib/containers/MultiArrow/MultiArrow";
import ArrowAndInfo from "./lib/containers/ArrowAndInfo/ArrowAndInfo";
import PaddingWrapper from "./lib/wrappers/padding/PaddingWrapper";
import Delta from "./lib/containers/Delta/Delta";
import MainPage from "./lib/pages/MainPage/MainPage";

const arr = [true, true, false, false, true];
const data = [
    {
        name: 'Alpha',
        amount: 52,
        money: 5
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
];

function App() {
  return (
    <div className="App">
        <MainPage/>
    </div>
  );
}

export default App;
