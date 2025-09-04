import API from "@/data/api";
import { AxiosError } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface BaseProps {
  endpoint: string;
  headers?: Record<string, string>;
}

type GetProps = BaseProps & {
  method?: "GET";
  data?: never;
};

type MutateProps = BaseProps & {
  method: "POST" | "PUT" | "DELETE";
  data: unknown;
};

type IHandleDataProps = GetProps | MutateProps;

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  status?: number;
}

export const handleData = async <T = unknown,>({
  endpoint,
  method = "GET",
  data,
  headers = {},
}: IHandleDataProps): Promise<ApiResponse<T>> => {
  try {
    const response = await API<T>({
      url: `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
      method: method.toLowerCase() as HttpMethod,
      ...(data ? { data } : {}),
      headers,
    });

    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;

    console.error("API Error:", err.response || err.message);

    return {
      success: false,
      status: err.response?.status ?? 500,
      message: err.response?.data?.message || err.message || "Unexpected error",
      data: err.response?.data as any,
    };
  }
};
