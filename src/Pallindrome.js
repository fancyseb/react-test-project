import React, { useState } from 'react';

const Pallindrome = () => {
  const [str, setStr] = useState('');
  const [isPalin, setIsPalin] = useState(false);

  const checkString = (val) => {
    setStr(val);
    let reverseStr = val.split('')?.reverse().join('');
    let bool = reverseStr === val ? true : false;
    setIsPalin(bool);
  };

  return (
    <>
      <p>
        <input
          type="text"
          placeholder={'Enter String'}
          value={str}
          onChange={(e) => checkString(e?.target.value)}
        />
      </p>
      {str !== '' && <p>{str !== '' && isPalin ? 'true' : 'false'}</p>}
    </>
  );
};
export default Pallindrome;
