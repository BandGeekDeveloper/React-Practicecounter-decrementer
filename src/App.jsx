import './App.css';
import Button from './Button.jsx';
import Display from './Display';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementFunction = (incrementValue) => {
    setCounter(counter + incrementValue);
  }

  const decrement = (decrementValue) => {
    setCounter(counter - decrementValue);
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <main>
      <Button
        onClickPlus={incrementFunction}
        onClickMinus={decrement}
        increment={1}
      />

      <Button
        onClickPlus={incrementFunction}
        onClickMinus={decrement}
        increment={5}
      />

      <Button
        onClickPlus={incrementFunction}
        onClickMinus={decrement}
        increment={10}
      />

      <Button
        onClickPlus={incrementFunction}
        onClickMinus={decrement}
        increment={100}
      />

      <button onClick={reset}>Reset</button>

      <Display message={counter} />
    </main>
  );
}
