export function changeTime(getDate) {
  // ====================================================
  // 게시물을 1달 전까진 오늘을 기준으로 시각을 출력하기 위한  함수입니다
  // ex) 5분전, 10분전, 4시간전, 3일전
  // 1달 이후부턴 년, 월, 일, 시간 순으로 출력
  // ex) 2041-03-04 05:43
  // ====================================================

  // MongoDB는 기본적으로 시간이 ISO 타입으로 저장된다고 하는데 이걸 다시 날짜객체로 만들어주면 내 위치가 한국이라 9시간이 더해지는 것 같다 그래서 다시 9시간을 빼준다.
  const staticDate = new Date(getDate);
  staticDate.setHours(staticDate.getHours() - 9);

  //현재 시간을 불러온다
  const now = new Date();

  // 밀리초를 각각 초, 분, 시간, 하루 단위로 계산
  const millisecondsDiff = now - staticDate;
  const secondsDiff = millisecondsDiff / 1000;
  const minutesDiff = secondsDiff / 60;
  const hoursDiff = minutesDiff / 60;
  const daysDiff = minutesDiff / 60;

  console.log("----- [ 현재시간 - 데이터 입력시간 ] -----");
  console.log("밀리초 > ", millisecondsDiff);
  console.log("초 > ", secondsDiff);
  console.log("분 > ", minutesDiff);
  console.log("시간 > ", hoursDiff);
  console.log("일 > ", daysDiff);

  //1.5일 같은 날이 나오면 2일전으로 표기하기 위해 반드시 올림을 해서 반환한다
  //30일 초과105958904
  if (millisecondsDiff < 25_9200_0000) {
    console.log("원본 시간 출력");
    return getDate.replace("T", " ").substring(0, 19);

    //1일 초과
  } else if (millisecondsDiff > 8640_0000) {
    console.log("일 출력");
    return Math.ceil(daysDiff) + "일 전";

    //1시간 초과
  } else if (millisecondsDiff > 360_0000) {
    console.log("시간 출력");
    return Math.ceil(hoursDiff) + "시간 전";
  }
  // (1)
  // ---------------------------
  //1분 초과
  else {
    console.log("분 출력");
    return Math.ceil(minutesDiff) + "분 전";
  }
  // ---------------------------

  // 초 단위까지는 정확하지 않아서 사용하지 않습니다
  // 사용을 희망한다면 "---" 안의 코드를 제거하고 (1)의 위치에 아래의 코드로 교체해주세요.
  // ↓ ↓
  // else if (millisecondsDiff > 6_0000) {
  //   return Math.ceil(minutesDiff) + "분 전";
  // } else {
  //   return Math.ceil(secondsDiff) + "초 전";
  // }
  // ↑ ↑

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
