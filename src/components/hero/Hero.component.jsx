import React from 'react';
import {Container, Header} from './Hero.styles';

export default function Hero({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Hero.Header = function HeroHeader({children, ...restProps}) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};
