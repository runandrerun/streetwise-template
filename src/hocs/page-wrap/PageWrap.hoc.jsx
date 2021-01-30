import React from 'react';
import {HeaderContainer, FooterContainer} from '../../containers';

export default function PageWrap({children, ...restProps}) {
  return (
    <div>
      <HeaderContainer />
        {children}
      <FooterContainer />
    </div>
  );
};
