import React from 'react';
import { useEffect, useState } from 'react';
import "./App.css";

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

export default function App() {
  const [board, setBoard] = useState(shuffle([...TILE_COLORS, ...TILE_COLORS]));
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);


  useEffect(() => {
    if (selected.length < 2) return;

    if (board[selected[0]] === board[selected[1]]) {
      setMatched(prevMatched => {
        return [...prevMatched, ...selected];
      })
      setSelected([]);
    } else {
      const timerId = setTimeout(() => setSelected([]), 1000);
      return () => clearTimeout(timerId)
    }

  }, [selected]);

  const updateSelected = (i) => {
    if (selected.length === 2 || selected.includes(i) || matched.includes(i)) return;
    setSelected(prevSelected => {
      return [...prevSelected, i];
    })
  }

  const didWin = matched.length === board.length;

  return (
    <>
      <h1>{didWin ? "You won" : 'Memory'}</h1>
      <div className="board">
        {board.map((color, index) => {
          const isUsed = selected.includes(index) || matched.includes(index);
          return (
            <div
              className={isUsed ? `tile ${color}` : `tile`}
              key={index}
              onClick={() => updateSelected(index)}
            />
          );
        })}
      </div>
      {didWin && <button onClick={() => {
        setBoard(shuffle([...TILE_COLORS, ...TILE_COLORS]));
        setSelected([]);
        setMatched([]);
      }}>Restart</button>}
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}