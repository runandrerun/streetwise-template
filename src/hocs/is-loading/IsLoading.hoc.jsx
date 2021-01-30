import React, {useState} from 'react';
import {Loader} from '../../components';

export default function IsLoading(WrappedComponent) {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = isComponentLoading => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <Loader />}
        <WrappedComponent setLoading={setLoadingState} />
      </>
    );
  };
  return HOC;
};

// export default IsLoading;
