import './App.css';
import CreateAndUseComponent from './components/createAndUseComponent';
import ConditionalRendering from './components/conditionalRendering';
import RenderingLists from './components/renderingLists';
import RespondToEvent from './components/respondToEvent';
import UseState from './components/useState';

import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <CreateAndUseComponent />
//       <ConditionalRendering />
//       <RenderingLists />
//       <RespondToEvent />
//       <UseState />
//       <UseState />
//     </div>
//   );
// }

// Share Data between components [ File : useState.js ]
function App() {
  const [count, setCount] = useState(10);

  function handleClick() {
    setCount(count + 10);
  }

  return (
    <div className="App">
      <CreateAndUseComponent />
      <ConditionalRendering />
      <RenderingLists />
      <RespondToEvent />
      <UseState count={count} onClick={handleClick} />
      <UseState count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
