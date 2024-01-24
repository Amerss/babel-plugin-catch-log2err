const getUerInfo = () => {
  return Promise.resolve('error');
};
getUerInfo().then(res => {
  console.log(res);
}).catch(e => {
  flag = false;
  console.error('123123123', e);
  console.error('123123123', e, '123123123');
  console.log(1 + 1);
  console.error(e);
});