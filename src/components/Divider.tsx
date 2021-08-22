import React, { memo } from 'react';

type DividerProps = {
  height: string;
  background: string;
};

const Divider: React.FC<DividerProps> = memo(({ height, background }) => {
  return <div style={{ height, background }}></div>;
});

export default Divider;
