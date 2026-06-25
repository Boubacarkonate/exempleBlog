import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  url?: string;
}

const SITE_NAME = "The Travel Blog";
const BASE_URL = "https://the-travel-blog.vercel.app";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

const SEO = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = "website",
  url,
}: SEOProps) => {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const canonical = url ? `${BASE_URL}${url}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
