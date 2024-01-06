import React from 'react';
import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#f1ad00"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
