import { ApiGetServiceWrapper } from "../wrapperService";
import { API_ENDPOINT } from "./ApiEndpoint";

export const ApiRequestGet = {
  verifyClient: ({ token }) => {
    console.log(token, "in api req");
    return new Promise((resolve, reject) => {
      ApiGetServiceWrapper({
        headers: {
          Authorization: "Bearer " + token,
        },
        url: API_ENDPOINT.coupon_service_url + "verifytoken",
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
