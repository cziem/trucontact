/*
 * page: _app
 * author: Favour George
 * Date: Jan 19, 2021
 * Override default Next.js app behaviour
 */

import React from "react";
import App from "next/app";
import Head from "next/head";
import ThemeProvider from "../config/themes/ThemeProvider";

class ElectoralRecall extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>TruContact | Sustainable CSR</title>
        </Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default ElectoralRecall;
