import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Digitera | Contact</title>
        <meta name="description" content="Contact Digitera." />
      </Head>

      <main style={{ padding: 20, fontFamily: "Arial" }}>
        <nav style={{ marginBottom: 20 }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/work">Our Work</Link> |{" "}
          <Link href="/contact">Contact</Link>
        </nav>

        <h1>Contact Us</h1>
        <p>Email: hello@digitera.com</p>
      </main>
    </>
  );
}
