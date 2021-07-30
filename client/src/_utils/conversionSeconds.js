export function conversionSeconds(getSeconds) {
  let hours, minutes, seconds;

  if (getSeconds / 60 >= 60) {
    //초가 한시간 이상일 때
    let temp = getSeconds / 60;
    hours = temp / 60;
    minutes = temp / 60;

    hours = getSeconds / 60;
    seconds = getSeconds % 60;
  } else {
    //초가 한시간 미만일 때
    minutes = getSeconds / 60;
    seconds = getSeconds % 60;
  }

  return `${hours < 10 ? `0${hours}` : hours}
  : ${minutes < 10 ? `0${minutes}` : minutes}
  : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
