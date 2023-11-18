const getLocalData = () => {
  let data = [];
  const loacalData = JSON.parse(localStorage.getItem('cart'));
  if (loacalData) {
    data = loacalData;
  }
  return data;
};
const setLocalData = name => {
  const dataDb = getLocalData();
  const newData = [...dataDb, name];
  localStorage.setItem('cart', JSON.stringify(newData));
};

export { getLocalData, setLocalData };
