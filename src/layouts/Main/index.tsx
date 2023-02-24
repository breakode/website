import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MetaTag } from '../../utils/interface/seo.interface';

interface IMainProps {
  title?: string
  meta?: MetaTag
  children: any
}

const Main: React.FC<IMainProps> = (props) => {
  const { title, meta, children } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta?.desc} />
        <meta name="keywords" content="Breakode, Code, Break, Break Kode, Break Code, Breakode" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Breakode ID" />
        <meta property="og:description" content={meta?.desc} />
        <meta property="og:image" content={meta?.image} />
        <meta property="og:url" content={meta?.url} />
        <link rel="canonical" href={meta?.url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Breakode ID",
            "url": "https://breakode.id",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://breakode.id/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
          `}
        </script>
      </Helmet>
      {children}
    </>
  );
};

Main.defaultProps = {
  title: 'Breakode ID',
  meta: {
    author: 'Syaikhan Agil',
    desc: 'Breakfast and Breakdown w/ code.',
    image: '',
    url: 'https://breakode.id'
  }
};

export default Main;
