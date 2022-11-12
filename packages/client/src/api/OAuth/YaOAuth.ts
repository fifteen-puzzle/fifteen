import {axiosInstance} from "../axios";
import {REDIRECT_URI} from "../const";
import { TAuthResponse, TOAuth} from "../auth";


export const getServiceId = async () => {
  try {
    const result = await axiosInstance('/api/v2/oauth/yandex/service-id', {
      method: "get",
      params: {REDIRECT_URI}
    })
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const authorizeWithYaOAuth = async (data: TOAuth): Promise<TAuthResponse> => {
  try {
    const result = await axiosInstance<TAuthResponse>('/api/v2/oauth/yandex', {
      method: "post",
      data
    });
    return result.data;
  } catch (error) {
    console.log(error)
  }
};
