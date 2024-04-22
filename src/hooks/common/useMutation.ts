import { AxiosResponse } from "axios";
import { useState } from "react";
import axios from "../../services/axios";
import { IMutationOptions } from "../../utils/data";

const useMutation = <T, K>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState<unknown | null>(null);

  const mutate = async (payload: K, mutationOptions?: IMutationOptions) => {
    try {
      setIsLoading(true);
      const res: AxiosResponse = await axios.post(url, payload);
      setData(res?.data);
      setIsLoading(false);

      mutationOptions?.onSuccess?.(data);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      mutationOptions?.onError?.(error);
    }
  };

  return { data, isLoading, error, mutate };
};

export default useMutation;
