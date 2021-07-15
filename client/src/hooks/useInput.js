import { useState, useCallback } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    console.log("hooks > ", e.target.value);
  }, []);

  return [value, setValue, onChange];
};

export default useInput;
