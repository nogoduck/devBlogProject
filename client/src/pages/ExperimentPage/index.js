import { withRouter } from "react-router-dom";
import React from "react";

import ModalSection from "./ModalSection";
import FileSection from "./FileSection";

function ExperimentPage() {
  return (
    <>
      <FileSection />
      <hr />
      <ModalSection />
    </>
  );
}

export default withRouter(ExperimentPage);
