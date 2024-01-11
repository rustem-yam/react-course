import { Button } from "antd";
import React, { useState } from "react";

const Game: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    if (counter < 10) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      alert("Поздравляем! Вы достигли десяти!");
    }
  };

  return (
    <div>
      <h1>Игра "Досчитай до десяти"</h1>
      <p>Текущий счет: {counter}</p>
      {counter < 10 ? (
        <Button onClick={handleIncrement}>Увеличить счетчик</Button>
      ) : (
        <p>Поздравляем! Вы достигли десяти!</p>
      )}
    </div>
  );
};

export default Game;
