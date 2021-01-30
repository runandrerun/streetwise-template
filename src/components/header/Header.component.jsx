import React from 'react';
import {Container, Logo, ButtonsContainer, Anchor, ButtonLink} from './Header.styles';

export default function Header({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Header.Logo = function HeaderLogo({...restProps}) {
  return (
    <Logo {...restProps} />
  );
};

Header.ButtonsContainer = function HeaderButtonsContainer({children, ...restProps}) {
  return (
    <ButtonsContainer {...restProps}>{children}</ButtonsContainer>
  );
};

Header.Anchor = function HeaderAnchor({children, ...restProps}) {
  return (
    <Anchor {...restProps}>{children}</Anchor>
  );
};

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
  return (
    <ButtonLink {...restProps}>{children}</ButtonLink>
  );
};
