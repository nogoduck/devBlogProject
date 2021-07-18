export function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours < 10 ? `0${hours}` : hours} 
  : ${minutes < 10 ? `0${minutes}` : minutes}
  : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
