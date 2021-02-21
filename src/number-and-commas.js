export default (num) => {
  return String(num).replace(/\B(?=(\d{3})+$)/g, ",");
};
