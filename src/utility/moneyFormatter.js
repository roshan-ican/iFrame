export const formatBalance = (balance) => {
  return balance.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,");
};
