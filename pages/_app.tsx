import "@styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactElement, useEffect, useRef } from "react";
import { NextPage } from "next";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "@common/SmoothScroll";
import { ThemeProvider } from "next-themes";
import CustomCursorManager from "@components/UI/context/manager";
import * as THREE from "three";
import PageWrapper from "@common/PageWrapper";

type DefaultLayoutType = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

type Page<P = {}> = NextPage<P> & {
  Layout: DefaultLayoutType;
};

type Props = AppProps & {
  Component: Page;
};

const DefaultLayout: DefaultLayoutType = ({
  children,
}: {
  children: ReactElement;
}) => <>{children}</>;

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout || DefaultLayout;

  useEffect(() => {
    document.body.classList.remove("loading");
    console.log(navigator)
  }, []);

  return (
      <AnimatePresence exitBeforeEnter>
      <CustomCursorManager>
        <SmoothScroll>
          <ThemeProvider defaultTheme="light">
            <Layout>
              {/* @ts-ignore */}
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </SmoothScroll>
      </CustomCursorManager>
    </AnimatePresence>
  );
}

export default MyApp;
