import { Contact } from "@/components/contact";
import { PageBanner } from "@/components/page-banner";
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <title>inaveen - contact</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageBanner pageTitle="Connect With Me" currentPage="Contact" />
      <Contact />
    </>
  );
}
