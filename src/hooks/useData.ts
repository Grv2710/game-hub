import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchRequest<T> {
  results: T[];
}

const useData = <T>(
  endpoint: string,
  request?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  useEffect(
    () => {
      const controller = new AbortController();

      apiClient
        .get<FetchRequest<T>>(endpoint, {
          signal: controller.signal,
          ...request,
        })
        .then((res) => setData(res.data.results))
        .catch((err) => setError(err.message));

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error };
};

export default useData;
