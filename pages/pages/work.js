import Head from "next/head";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <Head>
        <title>Digitera | Our Work</title>
        <meta name="description" content="Projects and digital solutions by Digitera." />
      </Head>

      <main style={{ padding: 20, fontFamily: "Arial" }}>
        <nav style={{ marginBottom: 20 }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/work">Our Work</Link> |{" "}
          <Link href="/contact">Contact</Link>
        </nav>

        <h1>Our Work</h1>
        <p>Examples of projects we’ve built:</p>

        <ul>
          <li>Business websites</li>
          <li>Dashboards</li>
          <li>Custom software</li>
        </ul>

        <p>Add more projects in the admin dashboard.</p>
      </main>
    </>
  );
}
