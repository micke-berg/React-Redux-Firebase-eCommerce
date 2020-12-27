import React from 'react';
import Button from '../forms/Button/Button';

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => (
  <Button onClick={() => onLoadMoreEvt()}>
    Load More
  </Button>
);

export default LoadMore;
