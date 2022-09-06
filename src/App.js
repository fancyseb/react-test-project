import React from 'react';
import './style.css';
import NameDropdown from './NameDropdown';
import { dataFromAPI } from './data.js';
import Pallindrome from './Pallindrome';
import Filter from './Filter';
import Counter from './Counter';

export default function App() {
  return (
    <div>
      <NameDropdown />
      <Filter />
      <Pallindrome />
      <Counter />
    </div>
  );
}
