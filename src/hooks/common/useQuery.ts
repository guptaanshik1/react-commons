import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { TPathVariables } from "../../utils/data";

const useQuery = <T>(
  url: string,
  pathVariables?: TPathVariables,
  queryParams?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  let fullUrl = url;

  if (pathVariables) {
    fullUrl = Object.keys(pathVariables || {}).reduce<string>((acc, curr) => {
      return acc.replace(`:${curr}`, encodeURIComponent(pathVariables[curr]));
    }, url);
  }

  if (queryParams) {
    const searchParams = new URLSearchParams();

    Object.entries(queryParams).forEach(([key, value]) =>
      searchParams.append(key, value)
    );
    fullUrl += `?${searchParams.toString()}`;
  }

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res: AxiosResponse<T> = await axios.get(fullUrl);
      setData(res?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useQuery;
