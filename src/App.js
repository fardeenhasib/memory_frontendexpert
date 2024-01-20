import React from 'react';
import { useEffect, useState } from 'react';
import "./App.css";

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

export default function App() {
  // Write your code here.

  return (
    <>
      <h1>Hello</h1>
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