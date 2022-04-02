import React, { useState } from 'react';
import axios from 'axios';

import useInput from '../../../hooks/useInput';

const FormSection = () => {
  const [file, setFile] = useState(false);
  const [input1, setInput1, onChangeInput1] = useInput();
  const [input2, setInput2, onChangeInput2] = useInput();

  const postForm = (e) => {
    e.preventDefault();

    //FormData는 브라우저 정책으로 데이터가 보이지 않는다
    //https://stackoverflow.com/questions/17066875/how-to-inspect-formdata
    const url1 = URL.createObjectURL(file);
    console.log('file to blob url1 >> ', url1);

    const fd = new FormData();
    const blob = new Blob([file], { type: 'image/png' });
    console.log('blob >> ', blob);
    const url2 = URL.createObjectURL(blob);
    console.log('blob to blob url2 >> ', url2);
    const setting = {
      headers: {
        ProcessData: false,
        // "Content-Type": "multipart/form-data",
      },
    };

    console.log(input1, input2);
    // fd.append("objectValue1", input1);
    // fd.append("objectValue2", input2);
    fd.append('file', file);

    console.log('fd >> ', fd, setting);

    for (let key of fd.keys()) {
      console.log('key >>', key);
    }
    for (let value of fd.values()) {
      console.log('value >>', value);
    }

    axios
      .post('/api/test/save', fd)
      .then(({ data }) => {
        console.log('data >> ', data);
      })
      .catch((err) => {
        console.log('err >> ', err);
      });
  };

  const onChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
  };

  const setCookie1 = (e) => {
    axios
      .post('/api/test/cookie1')
      .then((res) => {
        console.log('res >> ', res);
      })
      .catch((err) => {
        console.log('err >> ', err);
      });
  };
  return (
    <div>
      <h3>폼 요청, 응답</h3>
      <button onClick={setCookie1}>쿠키생성_1</button>
      <form action="http://localhost:5050/api/test/form/save" method="post">
        <h4>Form 태그 사용</h4>
        <input type="text" name="value1" />
        <br />
        <input type="text" name="value2" />
        <br />
        <input type="file" name="value3" />
        <br />
        <input type="submit" />
      </form>
      <form>
        <h4>Form 객체 사용</h4>
        <input type="text" value={input1} onChange={onChangeInput1} />
        <br />
        <input type="text" value={input2} onChange={onChangeInput2} />
        <br />
        <input type="file" onChange={onChangeFile} /> <br />
        <button onClick={postForm}>제출</button>
      </form>
      <img src={`http://localhost:5050/zDummyFile/origin_blob`} width="300px" />
    </div>
  );
};

export default FormSection;
