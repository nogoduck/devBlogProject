export const pagiNation = (total, current) => {
  const pagingCnt = 5;
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

export const pagiTotalCalc2 = (value) => {
  const onePageViewCount = 10;

  return value % onePageViewCount
    ? Math.floor(value / onePageViewCount) + 1
    : value / onePageViewCount;
};

////pagiTotalCalc2 와 동일함
// export const pagiTotalCalc = (value) => {
//   //한 페이지에 보여줄 게시글 개수
//   const onePageViewCount = 10;
//   if (!(value % onePageViewCount)) {
//     //총 게시글 개수에서 보여줄 개수가 나뉘어 떨어지면 그대로 반환
//     return value / onePageViewCount;
//   } else {
//     // 그렇지 않으면 몫에서 무조건 1을 증감해서 반환
//     return Math.floor(value / onePageViewCount) + 1;
//   }
// };
