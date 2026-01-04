import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
}

const Seo = ({
  title = "Template Landing Page | Bengkel Motor",
  description = "Servis motor tanpa antre, mekanik ahli, dan suku cadang original. Booking sekarang di MotoFix!",
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* Open Graph untuk Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Seo;
