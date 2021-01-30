import React from 'react';
import {Container, Card, ContentWrap, Title, Body} from './Post.styles';

export default function Post({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Post.Card = function PostCard({children, ...restProps}) {
  return (
    <Card {...restProps}>
      <ContentWrap>
        {children}
      </ContentWrap>
    </Card>
  );
};

Post.Title = function PostTitle({children, ...restProps}) {
  return (
    <Title {...restProps}>{children}</Title>
  );
};

Post.Body = function PostBody({children, ...restProps}) {
  return (
    <Body {...restProps}>{children}</Body>
  );
};
