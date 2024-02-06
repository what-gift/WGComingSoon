import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "what.gift" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover overflow-hidden">
    <Head>
      <title>{title} | Themeptation</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="what.gift"
      />
      <meta property="og:title" content={`${title} | what.gift`} />
      <meta
        property="og:description"
        content="what.gift - the place where wishes come true"
      />
      <meta property="og:url" content="what.gift" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
