import React from 'react';
import { dataFromAPI } from './data.js';

const NameDropdown = () => {
  return (
    <>
      <select>
        {dataFromAPI?.length > 0 &&
          dataFromAPI?.map((item) => (
            <option
              key={item?.first_name}
            >{`${item?.first_name}  ${item?.last_name}`}</option>
          ))}
      </select>
    </>
  );
};
export default NameDropdown;
