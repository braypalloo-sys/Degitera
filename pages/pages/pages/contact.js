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

        <form style={{ marginTop: 20 }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={{ display: "block", marginBottom: 10, padding: 6, width: "100%" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={{ display: "block", marginBottom: 10, padding: 6, width: "100%" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            style={{ display: "block", marginBottom: 10, padding: 6, width: "100%", height: 100 }}
          />
          <button type="submit" style={{ padding: "8px 12px", backgroundColor: "#00aaff", color: "#fff" }}>
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
