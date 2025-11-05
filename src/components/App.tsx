import axios from "axios";
import { useState, useEffect } from "react";

import Timer from "./Timer";
import Sidebar from "./Sidebar";

import type { Character } from "../types/character";

export default function App() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [counter, setCounter] = useState<number>(() => {
    const value = localStorage.getItem("counter");

    if (value !== null) {
      return JSON.parse(value);
    }

    return 0;
  });
  const [isTimerVisible, setIsTimerVisible] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log("useEffect");

  //   const fetchCharacter = async () => {
  //     const {data} = await axios.get<Character>("https://swapi.info/api/people/1");

  //     setCharacter(data);
  //   }

  //   fetchCharacter();
  // }, []);

  useEffect(() => {
    console.log("useEffect", { counter });

    localStorage.setItem("counter", JSON.stringify(counter));

    return () => {
      console.log("After");
    };
  }, [counter]);

  // useEffect(() => {
  //   console.log("useEffect", {character});
  // }, [character]);

  // useEffect(() => {
  //   console.log("useEffect", {counter, character});
  // }, [counter, character]);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const toggleTimerVisible = () => {
    setIsTimerVisible((prevIsTimerVisible) => !prevIsTimerVisible);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <h1>Lesson 6</h1>

      <pre>{JSON.stringify(character, null, 2)}</pre>

      <button onClick={handleClick}>Clicks: {counter}</button>
      <button onClick={toggleTimerVisible}>Toggle timer</button>
      <button onClick={openSidebar}>Open Sidebar</button>

      {isTimerVisible && <Timer />}

      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}
    </>
  );
}
