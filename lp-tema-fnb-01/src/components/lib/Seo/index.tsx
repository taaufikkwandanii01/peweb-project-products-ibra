import Head from "next/head";

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => (
  <Head>
    <title>{`${title} | Restoran Asep Apel`}</title>
    <meta
      name="description"
      content="Nikmati hidangan terbaik di Restoran Asep Apel"
    />
  </Head>
);

export default Seo;
