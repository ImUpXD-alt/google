import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>about:blank</title>
      </Head>
      <iframe
        src="/api/proxy"
        style={{
          border: "none",
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      />
    </>
  );
    }
    
