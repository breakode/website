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
        <meta name="description" content="Breakfast and Breakdown w/ code." />
        <meta name="keywords" content="Breakode, Code, Break, Break Kode, Break Code, Breakode" />
      </Helmet>
      {children}
    </>
  );
};

export default Main;
