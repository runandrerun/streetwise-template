import React, {useState, useEffect} from 'react';
import {PageWrap} from '../../hocs';
import {HeroContainer, PostsContainer} from '../../containers';
import {Loader} from '../../components';
import {DataContext} from '../../context';
import {fetchFakeData} from '../../adapters';

export default function Home() {
  const [isLoading, setLoading] = useState(true)
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    fetchFakeData()
    .then(data => {
      console.log("Inside homepage", data)
      setDataList(data)
      setLoading(false)
    });
  }, []);
  return (
    <PageWrap>
      <DataContext.Provider value={{ dataList, setDataList }}>
        <HeroContainer />
        {
          isLoading ?
          <Loader /> :
          <PostsContainer />
        }
      </DataContext.Provider>
    </PageWrap>
  );
};
