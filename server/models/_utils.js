exports.getDate = function () {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  return new Date(Date.UTC(2021, 5, 21, hours, minutes, seconds, milliseconds));
};

// console.log(getDate());
