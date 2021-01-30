import React from 'react';
import {Container, Content} from './Footer.styles';

export default function Footer({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Footer.Content = function FooterLogo({children, ...restProps}) {
  return (
    <Content {...restProps}>{children}</Content>
  );
};
