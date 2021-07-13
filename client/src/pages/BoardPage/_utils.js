export function changeTime(getDate) {
  //게시물을 1달 전까진 오늘을 기준으로 시각을 출력하기 위한 함수입니다
  //ex) 5분전, 10분전, 4시간전, 3일전
  //1달 이후부턴 년, 월, 일, 시간 순으로 출력
  //ex) 2041-03-04 05:43
  console.log("--------------------------------------------");
  console.log("원본 데이터 : ", getDate);
  //MongoDB는 기본적으로 시간이 ISO 타입으로 저장된다고 하는데 이걸 다시 날짜객체로 만들어주면 내 위치가 한국이라 9시간이 더해지는 것 같다 그래서 다시 9시간을 빼준다.
  const staticDate = new Date(getDate);
  staticDate.setHours(staticDate.getHours() - 9);
  console.log("등록시간 > ", staticDate);
  // console.log(date);
  // console.log(Date.now);
  // console.log(typeof date);
  // console.log(typeof Date.now());
  // console.log(date - Date.now());
  const now = new Date();

  console.log("now > ", now);
  // const UTCnow = now.toUTCString();
  // console.log("UTCnow > ", UTCnow);
  // const ISOnow = now.toISOString();
  // console.log("ISOnow > ", ISOnow.getHours() + 9);
  // console.log("현재시간 > ", now);
  const timeDiff = now - staticDate;
  console.log("현재시간 - 등록시간 >> ", timeDiff);

  const millisecondsDiff = new Date(timeDiff);
  console.log("____ 시간차 ms>> ", millisecondsDiff);

  const secondsDiff = millisecondsDiff / 1000;
  console.log("____ 시간차 (s)>> ", secondsDiff);

  const minutesDiff = secondsDiff / 60;
  console.log("____ 시간차 (m)>> ", minutesDiff);

  const hoursDiff = minutesDiff / 60;
  console.log("____ 시간차 (h)>> ", hoursDiff);

  const daysDiff = minutesDiff / 60;
  console.log("____ 시간차 (d)>> ", daysDiff);

  //1달 (30days)일을 초과하면 원래 게시된 시간을 반환한다
  if (daysDiff > 30) {
    return getDate;

    //1일 보다 적으면 아래 결과 반환
  } else if (daysDiff < 1) {
    //1시간 보다 많을 때
    if (hoursDiff > 1) {
      return hoursDiff + "시간 전";
    } else {
      //60초보다 많을 때
      if (minutesDiff > 60) {
        return minutesDiff + "분 전";
      } else {
        //60초 미만
        return secondsDiff + "초 전";
      }
    }
  } else {
    return daysDiff + "일 전";
  }
}
