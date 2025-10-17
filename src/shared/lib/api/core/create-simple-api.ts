import { fillEndpointTemplate } from './fill-endpoint-template';
import axios, { AxiosRequestConfig, Method } from 'axios';

type SimpleEndpointRequestConfig = Omit<
  AxiosRequestConfig,
  'url' | 'method' | 'params'
>;

export type SimpleEndpoint<R, P, T> = {
  (
    params?: P,
    routeParams?: T,
    config?: SimpleEndpointRequestConfig,
  ): Promise<R>;
};

export const createSimpleApi = (baseURL: string | null = null) => {
  return function createEndpoint<R = any, P = any, T = any>(
    method: string,
    httpMethod: Method = 'GET',
  ): SimpleEndpoint<R, P, T> {
    return (
      params = null,
      routeParams = null,
      config: SimpleEndpointRequestConfig = {},
    ) => {
      return axios
        .request<R>({
          withCredentials: true,
          url: fillEndpointTemplate(`/${method}`, routeParams),
          method: httpMethod,
          baseURL,
          params: !['POST', 'PUT'].includes(httpMethod) ? params : null,
          data: ['POST', 'PUT'].includes(httpMethod) ? params : null,
          ...(params instanceof FormData
            ? { transformRequest: () => params }
            : {}),
          ...config,
          headers: {
            ...config.headers,
            'X-Auth-Token': 'be54328469794237b1593b4818aa89ea',
          },
        })
        .then(response => response.data);
    };
  };
};
