
import { useState } from 'react';
import Buttons from './Components/Buttons/Buttons'
import Counter from './Components/Counter/Counter';

function App() {
  const [counter, setCounter] = useState(0)


  return (
    <div>
      <h1>Counter</h1>
      <Counter counter={counter} />
      <Buttons counter={counter} setCounter={setCounter} />
    </div >
  );
}

export default App;
