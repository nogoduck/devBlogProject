import React from "react";
import axios from "axios";

import useInput from "../../../hooks/useInput";

const FormSection = () => {
  const [input1, setInput1, onChangeInput1] = useInput();
  const [input2, setInput2, onChangeInput2] = useInput();

  const postForm = (e) => {
    e.preventDefault();

    const fd = new FormData();
    console.log(input1, input2);
    fd.append("objectValue1", input1);
    fd.append("objectValue2", input2);

    console.log("fd >> ", fd);

    axios
      .post("/api/test/form/save", fd)
      .then(({ data }) => {
        console.log("data >> ", data);
      })
      .catch((err) => {
        console.log("err >> ", err);
      });
  };

  return (
    <div>
      <h3>폼 요청, 응답</h3>
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
        <input type="file" /> <br />
        <button onClick={postForm}>제출</button>
      </form>
    </div>
  );
};

export default FormSection;
