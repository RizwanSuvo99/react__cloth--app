export const utils = () => {
  let data = localStorage.getItem("cloths");
  return JSON.parse(data) || [];
};
