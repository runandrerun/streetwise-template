import React from 'react';
import {Header} from '../../components';
import logo from '../../_assets/img/panda.svg';
import * as ROUTES from '../../constants/routes';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Logo
        src={logo}
        alt={"Template"}
      />
      <Header.ButtonsContainer>
        <Header.ButtonLink  to={ROUTES.HOME}>Home</Header.ButtonLink>
        <Header.ButtonLink  to={ROUTES.ABOUT}>About</Header.ButtonLink>
      </Header.ButtonsContainer>
    </Header>
  );
};
