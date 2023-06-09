import Head from "next/head";

export default function Header(props: { subheader: string }) {
  return (
    <Head>
      <title>G-Ticketing | {props.subheader} </title>
      <meta name="description" content="Generated Markson F. Senguji" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
