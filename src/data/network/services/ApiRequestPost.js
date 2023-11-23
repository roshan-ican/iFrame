import { ApiPostServiceWrapper } from "../wrapperService";
import { API_ENDPOINT } from "./ApiEndpoint";

export const ApiRequestPost = {
  getCoupons: ({ token, bodyParams }) => {
    return new Promise((resolve, reject) => {
      ApiPostServiceWrapper({
        headers: {
          Authorization: "Bearer " + token,
        },
        url: API_ENDPOINT.coupons_url,
        body: bodyParams, 
      })
        .then((response) => {
          console.log("🪶  file: ApiRequestPost.js:15  response=>", response)
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
