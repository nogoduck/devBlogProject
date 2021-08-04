import axios from 'axios';

export function postMacro(frequency, nickname, writer, writerId) {
  //frequency, nickname, writer, writerId
  // 빈도수, 닉네임, 유저이름, 유저아이디

  for (let i = 1; i <= frequency; i++) {
    let postNum = Math.floor(Math.random() * 10000) + 1;

    const data = {
      nickname: nickname,
      writer: writer,
      writerId: writerId,
      email: `${writer}${i}@devlog.com`,
      title: `더미 게시물 입니다. 생성 번호 : ${postNum}`,
      description: `더미 게시물 내용입니다. 생성 번호 : ${postNum}`,
    };

    axios
      .post('/api/board/create', data)
      .then((res) => {
        console.log(`${i}Post State : success`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
