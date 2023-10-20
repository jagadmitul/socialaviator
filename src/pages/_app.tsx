import "@/styles/globals.css";
import { Head } from "next/document";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "react-multi-carousel/lib/styles.css";
import "regenerator-runtime/runtime";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
