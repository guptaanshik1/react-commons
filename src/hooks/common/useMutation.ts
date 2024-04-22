import { AxiosResponse } from "axios";
import { useState } from "react";
import axios from "../../services/axios";

const useMutation = <T, K>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState<unknown | null>(null);

  const mutate = async (payload: K) => {
    try {
      setIsLoading(true);
      const res: AxiosResponse = await axios.post(url, payload);
      setData(res?.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, mutate };
};

export default useMutation;
