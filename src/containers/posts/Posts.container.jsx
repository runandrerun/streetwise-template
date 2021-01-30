import React, {useContext, useEffect} from 'react';
import {Post} from '../../components';
import {IsLoading} from '../../hocs';
import {DataContext} from '../../context';

export default function PostsContainer() {
  const { dataList } = useContext(DataContext);
  return (
    <Post>
      {
        dataList.map(({id, userId, title, body}) => {
          return (
            <Post.Card key={id + userId}>
              <Post.Title>{title}</Post.Title>
              <Post.Body>{body}</Post.Body>
            </Post.Card>
          )
        })
      }
    </Post>
  );
};
