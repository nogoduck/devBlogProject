import React, { useState } from 'react';

import ModalParents from './ModalParents';
import ModalChildren from './ModalChildren';
import ModalRef from './ModalRef';

function ModalSection() {
  const [showModalParents, setShowModalParents] = useState(false);
  const [showModalChildren, setShowModalChildren] = useState(false);
  const [showModalRef, setShowModalRef] = useState(false);

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

  const onClickModalRef = () => {
    console.log('showModal: ', showModalRef);
    setShowModalRef((prev) => !prev);
  };

  const onCloseModalRef = () => {
    setShowModalRef(false);
  };

  return (
    <>
      <h3>모달</h3>

      <button onClick={onClickParentsModal}>LeftModal</button>
      <button onClick={onClickChildrenModal}>RightModal</button>
      <ModalParents
        show={showModalParents}
        close={onCloseParentsModal}
        style={{ position: 'absolute', left: '0', top: '30%' }}
      >
        <br />
        <button onClick={onClickToggleChildrenModal}>
          Toggle ChildrenModal
        </button>
      </ModalParents>
      <ModalChildren
        show={showModalChildren}
        close={onCloseChildrenModal}
        style={{ position: 'absolute', right: '0', top: '30%' }}
      >
        <br />
        <button onClick={onClickToggleParentsModal}>Toggle ParentsModal</button>
      </ModalChildren>

      {/* <ModalRef
        showModal={showModalRef}
        setShowModal={setShowModalRef}
      ></ModalRef> */}
      <ModalRef show={showModalRef} close={onCloseModalRef}></ModalRef>
    </>
  );
}

export default ModalSection;
