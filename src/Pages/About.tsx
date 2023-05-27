import React from 'react';
import { PageHeader } from '../Components/Headers/PageHeader';
import { ABOUT_DESCRIPTION } from '../Constants/copy';
import { aboutDescriptionClassname } from '../Styles/AboutStyles';

export const About = () => {
  return (
    <div>
      <PageHeader text="About" />
      <div className={aboutDescriptionClassname}>
        <p>{ABOUT_DESCRIPTION.PARAGRAPH_1}</p>
        <p>{ABOUT_DESCRIPTION.PARAGRAPH_2}</p>
      </div>
    </div>
  );
};
