import { useState } from "react";

/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у App
 */
interface ClickCounterProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function ClickCounter({
  onIncrement,
  onDecrement,
}: ClickCounterProps) {
  return (
    <>
      <button onClick={onDecrement}> - </button>
      <button onClick={onIncrement}> + </button>
    </>
  );
}
