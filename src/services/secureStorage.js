import SecureStorage from "secure-web-storage";
import CryptoJS from "crypto-js";

var SECRET_KEY = "jlkdaj*(#@$##)nji23213nnL`3%^%$#@asdajsd13k13 8913u1983u1893 u1893";

var secureStorage = new SecureStorage(localStorage, {
  hash: function hash(key) {
    key = CryptoJS.SHA256(key, SECRET_KEY);
    return key.toString();
  },
  encrypt: function encrypt(data) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);

    data = data.toString();

    return data;
  },
  decrypt: function decrypt(data) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);

    data = data.toString(CryptoJS.enc.Utf8);

    return data;
  },
});

export default secureStorage;
