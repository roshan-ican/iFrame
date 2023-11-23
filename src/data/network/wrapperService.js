import secureStorage from "../../services/secureStorage";
// import { SS_AUTH_TOKEN, SS_REFRESH_TOKEN, SS_USER_HASH_ID } from "../../utility/constants/secureStorageManager";
import * as secureStorageManager from "/src/utility/constants/secureStorageManager";
import { STATUS_CODE_200, UNAUTHORIZED, UNAUTHORIZED_MESSAGE } from "../../utility/constants/valueConstants";
import { API_ENDPOINT } from "./services/ApiEndpoint";

export const ApiGetServiceWrapper = ({ url = "", headers = {} }) => {
  let token = secureStorage.getItem(SS_AUTH_TOKEN);
  let logId = secureStorage.getItem(SS_USER_HASH_ID);
  return new Promise(async (resolve, reject) => {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "X-Frame-Options": "DENY",
        log_user_id: logId,
        ...headers,
      },
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.message === UNAUTHORIZED_MESSAGE && response.statusCode === UNAUTHORIZED) {
          const res = await getNewJwtToken();

          if (res?.statusCode === STATUS_CODE_200) {
            secureStorage.setItem(SS_AUTH_TOKEN, res?.data?.token);
            secureStorage.setItem(SS_REFRESH_TOKEN, res?.data?.refreshToken);
            fetch(url, {
              method: "GET",
              headers: {
                Authorization: "Bearer " + res?.data?.token,
                "Content-Type": "application/json",
                "X-Frame-Options": "DENY",
                ...headers,
              },
            })
              .then((response) => response.json())
              .then((response) => {
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          }
        }
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export const ApiGetServiceWrapperBlob = ({ url = "", headers = {} }) => {
  let token = secureStorage.getItem(SS_AUTH_TOKEN);
  let logId = secureStorage.getItem(SS_USER_HASH_ID);
  return new Promise(async (resolve, reject) => {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "X-Frame-Options": "DENY",
        log_user_id: logId,
        ...headers,
      },
    })
      .then((response) => response.blob())
      .then(async (response) => {
        if (response.message === UNAUTHORIZED_MESSAGE && response.statusCode === UNAUTHORIZED) {
          const res = await getNewJwtToken();

          if (res?.statusCode === STATUS_CODE_200) {
            secureStorage.setItem(SS_AUTH_TOKEN, res?.data?.token);
            secureStorage.setItem(SS_REFRESH_TOKEN, res?.data?.refreshToken);
            fetch(url, {
              method: "GET",
              headers: {
                Authorization: "Bearer " + res?.data?.token,
                "X-Frame-Options": "DENY",
                ...headers,
              },
            })
              .then((response) => response.blob())
              .then((response) => {
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          }
        }
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export const ApiGetServiceWrapperText = ({ url = "", headers = {} }) => {
  let token = secureStorage.getItem(SS_AUTH_TOKEN);
  let logId = secureStorage.getItem(SS_USER_HASH_ID);
  return new Promise(async (resolve, reject) => {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "X-Frame-Options": "DENY",
        log_user_id: logId,
        ...headers,
      },
      responseType: "blob",
    })
      .then((response) => response.text())
      .then(async (response) => {
        if (response.message === UNAUTHORIZED_MESSAGE && response.statusCode === UNAUTHORIZED) {
          const res = await getNewJwtToken();

          if (res?.statusCode === STATUS_CODE_200) {
            secureStorage.setItem(SS_AUTH_TOKEN, res?.data?.token);
            secureStorage.setItem(SS_REFRESH_TOKEN, res?.data?.refreshToken);
            fetch(url, {
              method: "GET",

              headers: {
                Authorization: "Bearer " + res?.data?.token,
                "X-Frame-Options": "DENY",
                ...headers,
              },
            })
              .then((response) => response.text())
              .then((response) => {
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          }
        }
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export const ApiPostServiceWrapper = ({ url = "", headers = {}, body = {} }) => {
  let token = secureStorage.getItem(SS_AUTH_TOKEN);
  let logId = secureStorage.getItem(SS_USER_HASH_ID);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "X-Frame-Options": "DENY",
        log_user_id: logId,
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then((res) => res.json())
      .then(async (response) => {
        if (response.message === UNAUTHORIZED_MESSAGE && response.statusCode === UNAUTHORIZED) {
          const res = await getNewJwtToken();
          if (res?.statusCode === STATUS_CODE_200) {
            secureStorage.setItem(SS_AUTH_TOKEN, res?.data?.token);
            secureStorage.setItem(SS_REFRESH_TOKEN, res?.data?.refreshToken);
            fetch(url, {
              method: "POST",
              headers: {
                Authorization: "Bearer " + res?.data?.token,
                "Content-Type": "application/json",
                "X-Frame-Options": "DENY",
                ...headers,
              },
              body: JSON.stringify({
                ...body,
              }),
            })
              .then((res) => res.json())
              .then((response) => {
                resolve(response);
              })
              .catch((err) => {
                reject(err);
              });
          }
        }
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const ApiPutServiceWrapper = ({ url = "", headers = {}, body = {} }) => {
  let token = secureStorage.getItem(SS_AUTH_TOKEN);
  let logId = secureStorage.getItem(SS_USER_HASH_ID);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "X-Frame-Options": "DENY",
        log_user_id: logId,
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};

export const ApiGetServiceWithoutAuthenticationWrapper = ({ url = "", headers = {}, blob = false }) => {
  return new Promise(async (resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Frame-Options": "DENY",
        ...headers,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export const ApiPostServiceWithoutAuthenticationWrapper = ({ url = "", headers = {}, body = {} }) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Frame-Options": "DENY",
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then((res) => res.json())
      .then(async (response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};

export const ApiDeleteServiceWrapper = ({ url = "", headers = {}, body = {} }) => {
  let token = secureStorage.getItem(SS_AUTH_TOKEN);
  let logId = secureStorage.getItem(SS_USER_HASH_ID);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "X-Frame-Options": "DENY",
        log_user_id: logId,
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};

export const ApiPostServiceWrapperWithFormData = ({ url = "", headers = {}, body = {} }) => {
  let token = secureStorage.getItem(SS_AUTH_TOKEN);
  let logId = secureStorage.getItem(SS_USER_HASH_ID);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        // Authorization: "Bearer " + token,
        // "X-Frame-Options": "DENY",
        // "Content-Type": " multipart/form-data",
        log_user_id: logId,
        ...headers,
      },
      body: {
        ...body,
      },
    })
      .then((res) => res.json())
      .then(async (response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });
};

const getNewJwtToken = () => {
  let refreshToken = secureStorage.getItem(SS_REFRESH_TOKEN);
  return new Promise((resolve, reject) => {
    fetch(API_ENDPOINT.user_service_url + "authentication/token/create", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + refreshToken,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
