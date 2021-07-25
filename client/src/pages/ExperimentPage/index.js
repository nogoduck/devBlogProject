import { withRouter } from "react-router-dom";
import React from "react";

import ModalSection from "./ModalSection";
import FileSection from "./FileSection";
import FormSection from "./FormSection";

function ExperimentPage() {
  return (
    <>
      <FileSection />
      <hr />
      <FormSection />
      <hr />
      <ModalSection />
    </>
  );
}

export default withRouter(ExperimentPage);
