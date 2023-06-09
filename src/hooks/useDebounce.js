import { useEffect, useState } from 'react';

function useDebounce(Value, delay) {
  const [searchValue, setSearchValue] = useState(Value);
  useEffect(() => {
    const handler = setTimeout(
      () =>
        // eslint-disable-next-line no-unused-expressions
        setSearchValue(Value),
      delay,
    );
    return () => clearTimeout(handler);
  }, [Value]);
  return searchValue;
}

export default useDebounce;
