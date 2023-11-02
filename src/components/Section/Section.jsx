import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.titleResult}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
