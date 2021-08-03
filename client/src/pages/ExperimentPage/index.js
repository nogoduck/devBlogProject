import { withRouter } from 'react-router-dom';
import React from 'react';

import ModalSection from './ModalSection';
import FileSection from './FileSection';
import FormSection from './FormSection';
import StateSection from './StateSection';
import { Title } from './styled';

function ExperimentPage() {
  return (
    <>
      <Title>실험실</Title>
      <StateSection />
      <FileSection />
      <hr />
      <FormSection />
      <hr />
      <ModalSection />
    </>
  );
}

export default withRouter(ExperimentPage);
