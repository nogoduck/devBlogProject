export const pagiNation = (total, current) => {
  const pagingCnt = 3;
  const half = Math.floor(pagingCnt / 2);
  const arr = [];
  current = parseInt(current);
  let L = current - half;
  let R = current + half;

  if (L < 1) {
    R += Math.abs(L) + 1;
    L = 1;
  }

  if (R > total) {
    L -= R - total;
    R = total;
  }

  L = L < 1 ? 1 : L;

  for (let i = L; i <= R; i++) {
    arr.push(i);
  }

  return arr;
};
