import { useEffect, useState } from 'react';

function useDebounce(Value, delay) {
  console.log('abc', Value);
  console.log('delay', delay);
  const [searchValue, setSearchValue] = useState(Value);
  console.log('searchValue111', searchValue);

  useEffect(() => {
    const handler = setTimeout(
      () =>
        // eslint-disable-next-line no-unused-expressions
        setSearchValue(Value),
      delay,
    );
    return () => clearTimeout(handler);
  }, [Value]);
  console.log('searchValue', searchValue);
  return searchValue;
}

export default useDebounce;
