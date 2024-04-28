import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { IMutationOptions, TPathVariables } from "../../utils/data";

export const getDataPage = (pageParam = 1, options = {}) => {};

const useInfinteQuery = <T>(
  url: string,
  pageNum: number = 1,
  pathVariables?: TPathVariables,
  queryParams?: AxiosRequestConfig,
  mutationOptions?: IMutationOptions
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const controller = new AbortController();

    getDataPage(pageNum, { signal: controller.signal });

    return () => controller.abort();
  }, [pageNum]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res: AxiosResponse<T> = await axios.get(fullUrl);
      setData(res?.data);
      setIsLoading(false);

      mutationOptions?.onSuccess?.(data);
    } catch (error) {
      setIsLoading(true);
      setError(error);
      mutationOptions?.onError?.(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, hasNextPage, isFetchingNextPage };
};

export default useInfinteQuery;
