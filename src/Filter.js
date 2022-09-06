import React, { useState } from 'react';
import { dataFromAPI } from './data.js';

const Filter = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearchText(e?.target?.value)}
      />
      <ul>
        {dataFromAPI
          ?.filter(
            (item) =>
              item?.first_name?.toLowerCase().includes(search?.toLowerCase()) ||
              search === ''
          )
          ?.map((item, index) => (
            <li>{item?.first_name}</li>
          ))}
      </ul>
    </div>
  );
};
export default Filter;
