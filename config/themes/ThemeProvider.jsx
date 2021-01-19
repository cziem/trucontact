/*
 * theme: GlobalStylesNormalizr
 * author: Favour George
 * Date: Jan 19, 2021
 * Theme provider defaults to light theme
 */

import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { GlobalStylesNormalizr } from "./globals.styled";

export default ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStylesNormalizr />
      {children}
    </ThemeProvider>
  );
};
