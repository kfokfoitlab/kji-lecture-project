import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export type AxiosDefaultResponse<DataType> = AxiosResponse<{
  code: string;
  timestamp: number;
  data: DataType;
}>;

interface DefaultAxiosRequestConfig<ParameterType, BodyType = {}>
  extends Omit<AxiosRequestConfig<BodyType>, "params"> {
  params?: ParameterType;
}

export type AxiosStaticMethodsWithoutData = "get" | "delete";

export type AxiosStaticMethodsWithData = "post" | "put" | "patch";

export type AxiosStaticMethods =
  | AxiosStaticMethodsWithoutData
  | AxiosStaticMethodsWithData;

const axiosMethodsList: AxiosStaticMethods[] = [
  "delete",
  "get",
  "patch",
  "post",
  "put",
];

type ApiType = {
  [key in AxiosStaticMethodsWithoutData]: <
    ResponseType,
    ParameterType extends object = {},
  >(
    url: string,
    config?: DefaultAxiosRequestConfig<ParameterType>,
    token?: string,
  ) => Promise<AxiosResponse<ResponseType>>;
} & {
  [key in AxiosStaticMethodsWithData]: <
    ResponseType,
    ParameterType extends object = {},
    BodyType extends object = {},
  >(
    url: string,
    data?: BodyType,
    config?: DefaultAxiosRequestConfig<ParameterType, BodyType>,
    token?: string,
  ) => Promise<AxiosResponse<ResponseType>>;
};

const axiosMethods = axiosMethodsList.reduce((prev, cur) => {
  if (cur === "get" || cur === "delete") {
    return {
      ...prev,
      [cur]: <ResponseType, ParameterType extends object = {}>(
        url: string,
        config?: DefaultAxiosRequestConfig<ParameterType>,
        token?: string,
      ) => {
        if (config?.params) {
          const resultParams = Object.entries(config.params).reduce(
            (prev, [key, value]) => {
              if (value) {
                return {
                  ...prev,
                  [key]: value,
                };
              }

              return prev;
            },
            {},
          );

          url += `?${new URLSearchParams(resultParams).toString()}`;

          config.params = void 0;
        }

        return axiosInstance[cur]<AxiosResponse<ResponseType>>(url, config);
      },
    };
  }

  return {
    ...prev,
    [cur]: <
      ResponseType,
      ParameterType extends object = {},
      BodyType extends object = {},
    >(
      url: string,
      data: BodyType,
      config?: DefaultAxiosRequestConfig<ParameterType, BodyType>,
      token?: string,
    ) => {
      if (config?.params) {
        const resultParams = Object.entries(config.params).reduce(
          (prev, [key, value]) => {
            if (value) {
              return {
                ...prev,
                [key]: value,
              };
            }

            return prev;
          },
          {},
        );

        url += `?${new URLSearchParams(resultParams).toString()}`;

        config.params = void 0;
      }

      return axiosInstance[cur]<AxiosResponse<ResponseType>>(url, data, config);
    },
  };
}, {} as ApiType);

export const API = {
  ...axiosMethods,
};
