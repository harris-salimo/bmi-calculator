import { useState } from "react";

export const useForm = <T extends Record<string, unknown>>(
  initialValues: T,
) => {
  const [data, setData] = useState<T>(initialValues);
  return {
    data,
    setData,
  };
};
