import axios from 'axios';

export function postMacro(frequency) {
  for (let i = 1; i <= frequency; i++) {
    const data = {
      writer: `writer${i}`,
      email: `writer${i}@devlog.com`,
      title: `${i}번째 게시물 입니다`,
      description: `dummyData__${i}__`,
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
