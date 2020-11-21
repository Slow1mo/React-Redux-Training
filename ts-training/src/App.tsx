import React from 'react';
import './App.css';
import { TextField } from "./Textfield";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text="hrello" person={{ firstName: "", lastName: "" }} />
     <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
