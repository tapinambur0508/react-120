import { useState } from "react";

import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";

import TagManager from "./TagManager";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <>
      <h1>State in React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        quam? Minima, corporis quas! Ex harum ullam expedita quisquam est aut
        officia, consequuntur odio porro hic. Nemo amet aspernatur fugit eos.
      </p>
      <CountDisplay count={count} />

      <ClickCounter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      <TagManager />
    </>
  );
}
