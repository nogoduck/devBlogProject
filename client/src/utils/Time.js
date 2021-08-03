import axios from 'axios';

export function changeTime2(getDate) {
  const staticDate = new Date(getDate);
  const milliSeconds = new Date() - staticDate;
  // console.log('Time >> ', getDate, staticDate);
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
}

export function timeFormat(getDate) {
  return getDate.replace('T', ' ').substring(0, 19);
}

export function changeTime(getDate) {
  // ====================================================
  // 게시물을 1달 전까진 오늘을 기준으로 시각을 출력하기 위한  함수입니다
  // getDate는 스트링으로 된 시각을 받고 함수 내에서 밀리초로 변환하여 사용함
  // ex) 5분전, 10분전, 4시간전, 3일전
  // 1달 이후부턴 년, 월, 일, 시간 순으로 출력
  // ex) 2041-03-04 05:43
  // ====================================================

  // server측에서 Date.now로 값을 바로 넣으니 오차없이 가져와졌다
  const staticDate = new Date(getDate);
  // (사용안함) MongoDB는 기본적으로 시간이 ISO 타입으로 저장된다고 하는데 이걸 다시 날짜객체로 만들어주면 내 위치가 한국이라 9시간이 더해지는 것 같다 그래서 다시 9시간을 빼준다.
  // staticDate.setHours(staticDate.getHours() - 9);

  //현재 시간을 불러온다
  const now = new Date();

  // 밀리초를 각각 초, 분, 시간, 하루 단위로 계산
  const millisecondsDiff = now - staticDate;
  const secondsDiff = millisecondsDiff / 1000;
  const minutesDiff = secondsDiff / 60;
  const hoursDiff = minutesDiff / 60;
  const daysDiff = hoursDiff / 24;

  // console.log("----- [ 현재시간 - 데이터 입력시간 ] -----");
  // console.log("원본 시간 > ", getDate);
  // console.log("밀리초 > ", millisecondsDiff);
  // console.log("초 > ", secondsDiff);
  // console.log("분 > ", minutesDiff);
  // console.log("시간 > ", hoursDiff);
  // console.log("일 > ", daysDiff);

  //1.5일 같은 날이 나오면 2일전으로 표기하기 위해 반드시 올림을 해서 반환한다
  //30일 초과105958904
  if (millisecondsDiff > 25_9200_0000) {
    // return getDate.replace('T', ' ').substring(0, 19);
    //1일 초과
  } else if (millisecondsDiff > 8640_0000) {
    return Math.ceil(daysDiff) + '일 전';

    //1시간 초과
  } else if (millisecondsDiff > 360_0000) {
    return Math.ceil(hoursDiff) + '시간 전';

    //1분 초과
  } else if (millisecondsDiff > 6_0000) {
    return Math.ceil(minutesDiff) + '분 전';

    //1분 미만, 초 단위는 오차가 조금 있어서 분 또는 방금전으로 대체
  } else {
    return '방금 전';
    // return Math.ceil(secondsDiff) + '초 전';
  }

  // 조건부의 숫자는 밀리초를 쪼개서 결과를 반환했습니다.
  // ==============================
  // 30일
  // 1000 * 60 * 60 * 24 * 30 =
  // 25_9200_0000
  // ==============================
  // 1일
  // 1000 * 60 * 60 * 24 =
  // 8640_0000
  // ==============================
  // 1시간
  // 1000 * 60 * 60 =
  // 360_0000
  // ==============================
  // 1분
  // 1000 * 60 =
  // 6_0000
  // ==============================
}

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
