import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Digitera | Home</title>
        <meta name="description" content="Digitera digital innovation agency." />
      </Head>

      <main style={{ padding: 20, fontFamily: "Arial" }}>
        <nav style={{ marginBottom: 20 }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/work">Our Work</Link> |{" "}
          <Link href="/contact">Contact</Link>
        </nav>

        <h1>🚀 DIGITERA</h1>
        <p>Empowering businesses through digital innovation.</p>
      </main>
    </>
  );
}
