import React, { useState } from "react";

import ModalParents from "../ModalParents";
import ModalChildren from "../ModalChildren";

function ModalSection() {
  const [showModalParents, setShowModalParents] = useState(false);
  const [showModalChildren, setShowModalChildren] = useState(false);

  const onClickParentsModal = () => {
    setShowModalParents((prev) => !prev);
  };

  const onClickChildrenModal = () => {
    setShowModalChildren((prev) => !prev);
  };
  const onCloseParentsModal = () => {
    setShowModalParents(false);
  };

  const onCloseChildrenModal = () => {
    setShowModalChildren(false);
  };

  const onClickToggleChildrenModal = () => {
    setShowModalParents(false);
    setShowModalChildren(true);
  };

  const onClickToggleParentsModal = () => {
    setShowModalChildren(false);
    setShowModalParents(true);
  };

  return (
    <>
      <h3>모달</h3>
      <h4>
        Parent와 Children은 코드상 부모와 자식관계를 나타내는 형태에서
        사용되는데 내가 사용한 의도는 변수명에 불과하다.
      </h4>
      {/* ParentsModal 과 ChildrenModal은 서로 부모, 자식 관계가 아님  */}
      <button onClick={onClickParentsModal}>ParentsModal</button>
      <button onClick={onClickChildrenModal}>ChildrenModal</button>
      <ModalParents
        show={showModalParents}
        close={onCloseParentsModal}
        style={{ position: "absolute", left: "0", top: "30%" }}
      >
        <br />
        <button onClick={onClickToggleChildrenModal}>
          Toggle ChildrenModal
        </button>
      </ModalParents>
      <ModalChildren
        show={showModalChildren}
        close={onCloseChildrenModal}
        style={{ position: "absolute", right: "0", top: "30%" }}
      >
        <br />
        <button onClick={onClickToggleParentsModal}>Toggle ParentsModal</button>
      </ModalChildren>
    </>
  );
}

export default ModalSection;
