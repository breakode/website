import React from 'react';
import { Helmet } from 'react-helmet-async';

interface IMainProps {
  title: string
  children: any
}

const Main: React.FC<IMainProps> = (props) => {
  const { title, children } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="ja" />
      </Helmet>
      {children}
    </>
  );
};

export default Main;
