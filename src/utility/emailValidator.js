export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePan = (pan) => {
  return String(pan)
    .toLowerCase()
    .test(/^([a-zA-Z])([0-9])([a-zA-Z])?$/);
  // .test(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
};

export const validateUpi = (upi) => {
  return String(upi).match(/^[\w.-]+@[\w.-]+$/);
};

// var regpan = /^([a-zA-Z])([0-9])([a-zA-Z])?$/;

export const validateIPaddress = (ipaddress) => {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true;
  }
  return false;
};
