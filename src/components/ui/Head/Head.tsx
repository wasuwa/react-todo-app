import React from 'react';

type Prop = {
  text: string;
  activeMarginBottom?: boolean;
};

export const Head = (props: Prop) => {
  const { text, activeMarginBottom } = props;
  const style = activeMarginBottom ? 'mb-3' : '';

  return <h2 className={`font-bold ${style}`}>{text}</h2>;
};

Head.defaultProps = {
  activeMarginBottom: false,
};
