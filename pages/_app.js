import "../css/tailwind.css";
import { MDXProvider } from "@mdx-js/react";
import Components from "../components/MDX/Components";

import { useAmplify } from "../lib/useAmplify";

function MyApp({ Component, pageProps }) {
  useAmplify();
  return (
    <MDXProvider components={Components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
